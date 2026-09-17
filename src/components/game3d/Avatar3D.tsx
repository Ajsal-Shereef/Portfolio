"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

interface Avatar3DProps {
  avatarPosRef: React.MutableRefObject<THREE.Vector3>;
  dragTargetRef: React.MutableRefObject<THREE.Vector3>;
  isDraggingRef: React.MutableRefObject<boolean>;
}

export function Avatar3D({ avatarPosRef, dragTargetRef, isDraggingRef }: Avatar3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const [, getKeys] = useKeyboardControls();
  
  const speed = 12; // Movement speed
  const targetCameraPos = new THREE.Vector3();

  // Bounding limits for the play area
  const MIN_X = -35;
  const MAX_X = 35;
  const MIN_Z = -55;
  const MAX_Z = 15;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const { forward, backward, left, right } = getKeys();
    
    const direction = new THREE.Vector3();
    if (forward) direction.z -= 1;
    if (backward) direction.z += 1;
    if (left) direction.x -= 1;
    if (right) direction.x += 1;

    let isMoving = false;
    const moveDir = new THREE.Vector3();

    if (direction.lengthSq() > 0) {
      direction.normalize();
      groupRef.current.position.add(direction.multiplyScalar(speed * delta));
      moveDir.copy(direction);
      isMoving = true;
    } else if (isDraggingRef.current) {
      const dragDir = new THREE.Vector3().subVectors(dragTargetRef.current, groupRef.current.position);
      dragDir.y = 0; // Ignore vertical difference
      if (dragDir.lengthSq() > 0.1) {
        dragDir.normalize();
        groupRef.current.position.add(dragDir.multiplyScalar(speed * delta));
        moveDir.copy(dragDir);
        isMoving = true;
      }
    }

    // Clamp to play area boundaries
    groupRef.current.position.x = Math.max(MIN_X, Math.min(MAX_X, groupRef.current.position.x));
    groupRef.current.position.z = Math.max(MIN_Z, Math.min(MAX_Z, groupRef.current.position.z));
    
    // Smoothly rotate robot to face movement direction
    if (isMoving) {
      const targetAngle = Math.atan2(moveDir.x, moveDir.z);
      const currentRotation = groupRef.current.rotation.y;
      // Angle wrap handler
      const diff = targetAngle - currentRotation;
      const normalizedDiff = Math.atan2(Math.sin(diff), Math.cos(diff));
      groupRef.current.rotation.y += normalizedDiff * 10 * delta;
    }

    // Hovering effect
    groupRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.1;

    // Head bobbing effect
    if (headRef.current) {
      headRef.current.position.y = 0.6 + Math.sin(state.clock.elapsedTime * 6) * 0.05;
    }

    // Update the ref so Kiosks can check proximity without triggering re-renders
    avatarPosRef.current.copy(groupRef.current.position);

    // Camera follow logic
    targetCameraPos.copy(groupRef.current.position);
    targetCameraPos.y += 10;
    targetCameraPos.z += 12; // Isometric offset

    state.camera.position.lerp(targetCameraPos, delta * 4);
    state.camera.lookAt(groupRef.current.position.x, 0, groupRef.current.position.z);
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 5]} rotation={[0, Math.PI, 0]}>
      {/* Robot Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.4} metalness={0.6} />
        
        {/* Core glow */}
        <mesh position={[0, 0, 0.26]}>
          <planeGeometry args={[0.2, 0.2]} />
          <meshBasicMaterial color="#312e81" />
        </mesh>
      </mesh>

      {/* Robot Head */}
      <mesh ref={headRef} position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color="#312e81" roughness={0.3} metalness={0.8} />
        
        {/* Glowing Visor */}
        <mesh position={[0, 0.05, 0.21]}>
          <planeGeometry args={[0.3, 0.1]} />
          <meshBasicMaterial color="#a5b4fc" />
        </mesh>
      </mesh>

      {/* Hover Thruster Base */}
      <mesh position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.25, 0.05, 16, 32]} />
        <meshStandardMaterial color="#6366f1" emissive="#4f46e5" emissiveIntensity={2} />
      </mesh>
      
      {/* Downward thruster light */}
      <pointLight color="#818cf8" intensity={3} distance={5} position={[0, -0.4, 0]} castShadow />
    </group>
  );
}

"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface Kiosk3DProps {
  id: string;
  position: [number, number, number];
  title: string;
  color: string;
  avatarPosRef: React.MutableRefObject<THREE.Vector3>;
  isActive: boolean;
  isAnyActive: boolean;
  onActivate: (id: string | null) => void;
}

export function Kiosk3D({ id, position, title, color, avatarPosRef, isActive, isAnyActive, onActivate }: Kiosk3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const PROXIMITY_THRESHOLD = 3;
  const globalPos = new THREE.Vector3(...position);
  
  const wasActiveRef = useRef(isActive);
  const dismissedRef = useRef(false);

  useFrame(() => {
    if (!meshRef.current) return;
    
    // Idle rotation for the kiosk crystal/screen
    meshRef.current.rotation.y += 0.01;

    // Proximity check using the global position of the kiosk
    const dist = globalPos.distanceTo(avatarPosRef.current);
    
    if (dist < PROXIMITY_THRESHOLD) {
      if (!isActive && !dismissedRef.current) {
        // If it was active on the last check, but now is inactive (and we are still in range)
        // it means it was closed by the user via the X button!
        if (wasActiveRef.current) {
          dismissedRef.current = true;
        } else {
          onActivate(id);
        }
      }
    } else {
      dismissedRef.current = false; // Reset when you walk away
      if (isActive) {
        onActivate(null);
      }
    }

    wasActiveRef.current = isActive;
  });

  return (
    <group position={position}>
      {/* Base Pedestal */}
      <mesh position={[0, 0.5, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.8, 1, 1, 8]} />
        <meshStandardMaterial color="#1f2937" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Floating Hologram/Crystal */}
      <mesh 
        ref={meshRef} 
        position={[0, 2.5, 0]}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
          setHovered(true);
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
          setHovered(false);
        }}
      >
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={hovered || isActive ? 2 : 0.6}
          wireframe={true}
        />
        {(hovered || isActive) && <pointLight color={color} intensity={4} distance={20} />}
      </mesh>

      {/* Title Label */}
      {!isAnyActive && (
        <Html position={[0, 4.0, 0]} center style={{ pointerEvents: 'none' }}>
          <div 
            className="px-4 py-2 text-sm font-bold tracking-widest text-white bg-black/90 rounded-full border whitespace-nowrap shadow-xl transition-all"
            style={{ 
              borderColor: hovered || isActive ? color : 'rgba(255,255,255,0.2)',
              boxShadow: hovered || isActive ? `0 0 20px ${color}` : 'none'
            }}
          >
            {title}
          </div>
        </Html>
      )}
    </group>
  );
}

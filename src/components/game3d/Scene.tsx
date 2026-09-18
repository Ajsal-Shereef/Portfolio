"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import * as THREE from "three";
import { Avatar3D } from "./Avatar3D";
import { Kiosk3D } from "./Kiosk3D";
import { KioskContent } from "../game/KioskContent";
import { Modal } from "../game/Modal";

// 4 Fixed Layouts for Kiosks
const LAYOUTS = [
  // Layout 0: Cone
  [
    { id: "reception", title: "Reception / About", x: 0, z: -4, color: "#10b981" },
    { id: "vision-lab", title: "Vision Lab", x: -12, z: -12, color: "#06b6d4" },
    { id: "rl-arena", title: "RL Arena", x: 12, z: -12, color: "#f97316" },
    { id: "tools-foundations", title: "Tools & Foundations", x: 0, z: -15, color: "#eab308" },
    { id: "generative-forge", title: "Generative Forge", x: -20, z: -22, color: "#ef4444" },
    { id: "agentic-workshop", title: "Agentic Workshop", x: 20, z: -22, color: "#a855f7" },
    { id: "deployment-deck", title: "Deployment Deck", x: 0, z: -30, color: "#3b82f6" },
    { id: "contact-cv", title: "Buy my CV", x: 0, z: -40, color: "#ec4899" },
  ],
  // Layout 1: Zig-Zag
  [
    { id: "reception", title: "Reception / About", x: 0, z: -4, color: "#10b981" },
    { id: "vision-lab", title: "Vision Lab", x: 15, z: -10, color: "#06b6d4" },
    { id: "rl-arena", title: "RL Arena", x: -15, z: -16, color: "#f97316" },
    { id: "tools-foundations", title: "Tools & Foundations", x: 0, z: -20, color: "#eab308" },
    { id: "generative-forge", title: "Generative Forge", x: 20, z: -22, color: "#ef4444" },
    { id: "agentic-workshop", title: "Agentic Workshop", x: -20, z: -28, color: "#a855f7" },
    { id: "deployment-deck", title: "Deployment Deck", x: 0, z: -35, color: "#3b82f6" },
    { id: "contact-cv", title: "Buy my CV", x: 15, z: -42, color: "#ec4899" },
  ],
  // Layout 2: Circular cluster
  [
    { id: "reception", title: "Reception / About", x: 0, z: -4, color: "#10b981" },
    { id: "vision-lab", title: "Vision Lab", x: -15, z: -20, color: "#06b6d4" },
    { id: "rl-arena", title: "RL Arena", x: 15, z: -20, color: "#f97316" },
    { id: "tools-foundations", title: "Tools & Foundations", x: 0, z: -35, color: "#eab308" },
    { id: "generative-forge", title: "Generative Forge", x: -10, z: -32, color: "#ef4444" },
    { id: "agentic-workshop", title: "Agentic Workshop", x: 10, z: -32, color: "#a855f7" },
    { id: "deployment-deck", title: "Deployment Deck", x: 0, z: -26, color: "#3b82f6" },
    { id: "contact-cv", title: "Buy my CV", x: -15, z: -45, color: "#ec4899" },
  ],
  // Layout 3: Asymmetrical split
  [
    { id: "reception", title: "Reception / About", x: 0, z: -4, color: "#10b981" },
    { id: "vision-lab", title: "Vision Lab", x: -25, z: -15, color: "#06b6d4" },
    { id: "rl-arena", title: "RL Arena", x: -20, z: -28, color: "#f97316" },
    { id: "tools-foundations", title: "Tools & Foundations", x: 0, z: -20, color: "#eab308" },
    { id: "generative-forge", title: "Generative Forge", x: 25, z: -15, color: "#ef4444" },
    { id: "agentic-workshop", title: "Agentic Workshop", x: 20, z: -28, color: "#a855f7" },
    { id: "deployment-deck", title: "Deployment Deck", x: 0, z: -35, color: "#3b82f6" },
    { id: "contact-cv", title: "Buy my CV", x: -10, z: -45, color: "#ec4899" },
  ],
];

// Random monolithic scenery blocks
const SCENERY = Array.from({ length: 40 }).map((_, i) => ({
  x: (Math.random() - 0.5) * 100,
  z: (Math.random() - 0.5) * 100,
  width: Math.random() * 4 + 2,
  height: Math.random() * 15 + 5,
  depth: Math.random() * 4 + 2,
}));

export function Scene() {
  // Randomly pick a layout exactly once when the scene loads
  const kiosksData = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * LAYOUTS.length);
    return LAYOUTS[randomIndex];
  }, []);

  const avatarPosRef = useRef(new THREE.Vector3(0, 0.5, 5));
  const dragTargetRef = useRef(new THREE.Vector3());
  const isDraggingRef = useRef(false);
  const [activeKiosk, setActiveKiosk] = useState<string | null>(null);

  // Gamification State
  const [visitedKiosks, setVisitedKiosks] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    isDraggingRef.current = true;
    dragTargetRef.current.copy(e.point);
  };

  const handlePointerMove = (e: any) => {
    if (isDraggingRef.current) {
      e.stopPropagation();
      dragTargetRef.current.copy(e.point);
    }
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    isDraggingRef.current = false;
  };

  // Use useCallback to prevent Kiosk3D from re-rendering infinitely on dependency change
  const handleKioskActivate = useCallback((id: string | null) => {
    setActiveKiosk((prev) => {
      if (id && prev !== id) {
        setVisitedKiosks((prevVisited) => {
          if (!prevVisited.has(id)) {
            const newVisited = new Set(prevVisited).add(id);
            // Calculate score addition
            if (id === "contact-cv") {
              setScore(s => s + 500); // High reward for CV kiosk
            } else {
              setScore(s => s + 100); // Standard reward
            }
            return newVisited;
          }
          return prevVisited;
        });
        return id;
      }
      if (id === null) return null;
      return prev;
    });
  }, []);

  const activeKioskData = kiosksData.find(k => k.id === activeKiosk);

  return (
    <div className="relative w-full h-screen bg-gray-50 overflow-hidden">
      <Canvas
        shadows
        className="w-full h-full"
      >
        <color attach="background" args={['#f3f4f6']} />
        
        {/* Soft elegant fog to blend the horizon */}
        <fog attach="fog" args={['#f3f4f6', 15, 70]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[50, 100, 50]} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
          shadow-bias={-0.0001}
        />
        
        {/* Floor */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, 0, 0]} 
          receiveShadow
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerOut={handlePointerUp}
        >
          <planeGeometry args={[300, 300]} />
          <meshStandardMaterial color="#ffffff" roughness={0.8} metalness={0.1} />
        </mesh>

        {/* Visual Grid */}
        <Grid 
          infiniteGrid 
          fadeDistance={100}
          sectionColor="#d1d5db"
          cellColor="#e5e7eb"
          position={[0, 0.01, 0]}
        />

        {/* Scenery Monoliths */}
        {SCENERY.map((block, i) => (
          <mesh key={i} position={[block.x, block.height / 2, block.z]} castShadow receiveShadow>
            <boxGeometry args={[block.width, block.height, block.depth]} />
            <meshStandardMaterial color="#f9fafb" roughness={0.1} metalness={0.1} />
          </mesh>
        ))}

        {/* Avatar */}
        <Avatar3D 
          avatarPosRef={avatarPosRef} 
          dragTargetRef={dragTargetRef}
          isDraggingRef={isDraggingRef}
        />

        {/* Kiosks */}
        {kiosksData.map((kiosk) => (
          <Kiosk3D 
            key={kiosk.id}
            id={kiosk.id}
            position={[kiosk.x, 0, kiosk.z]}
            title={kiosk.title}
            color={kiosk.color}
            avatarPosRef={avatarPosRef}
            isActive={activeKiosk === kiosk.id}
            isAnyActive={activeKiosk !== null}
            onActivate={handleKioskActivate}
            isVisited={visitedKiosks.has(kiosk.id)}
          />
        ))}
      </Canvas>

      {/* Score Overlay */}
      <div className="absolute top-4 right-4 pointer-events-none z-10 flex flex-col items-end">
        <div className="bg-black/70 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl shadow-lg flex items-center gap-4">
          <div className="text-gray-100 font-bold tracking-wider text-sm uppercase drop-shadow-md">Score</div>
          <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-md">
            {score}
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-100 font-bold bg-black/70 px-4 py-1.5 rounded-full shadow-lg border border-white/20 backdrop-blur-md">
          {visitedKiosks.size} / {kiosksData.length} Kiosks Discovered
        </div>
      </div>

      {/* Game Won Overlay */}
      {gameWon && (
        <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="bg-white/10 border border-white/20 p-12 rounded-3xl text-center shadow-2xl scale-100 animate-in zoom-in-95 duration-500">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4 drop-shadow-lg">
              MISSION ACCOMPLISHED!
            </h2>
            <p className="text-xl text-white mb-6 font-medium">CV Acquired. You&apos;ve won the game!</p>
            <div className="text-gray-300">Final Score: <span className="text-2xl font-bold text-white">{score}</span></div>
          </div>
        </div>
      )}

      {/* HTML Overlay Modal */}
      <Modal 
        isOpen={activeKiosk !== null} 
        onClose={() => handleKioskActivate(null)}
        title={activeKioskData?.title || ""}
        onCVDownload={() => {
          setGameWon(true);
          setScore(s => s + 1000);
          handleKioskActivate(null);
        }}
      >
        {activeKiosk && <KioskContent kioskId={activeKiosk} onCVDownload={() => {
          setGameWon(true);
          setScore(s => s + 1000);
          handleKioskActivate(null);
        }} />}
      </Modal>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex flex-col items-center gap-2">
        <div className="px-6 py-3 rounded-full bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl">
          <p className="text-gray-300 text-sm font-medium tracking-wide text-center">
            <span className="text-indigo-400 font-bold">Click and Drag</span> the floor, or use <span className="text-indigo-400 font-bold">WASD / Arrows</span> to explore.
          </p>
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Approach glowing kiosks to access data</p>
      </div>
    </div>
  );
}

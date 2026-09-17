"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar } from "./Avatar";
import { Kiosk } from "./Kiosk";
import { Modal } from "./Modal";
import { KioskContent } from "./KioskContent";
import { Cpu, TerminalSquare, Eye, BrainCircuit, Rocket, Contact } from "lucide-react";

// Define the Kiosks layout relative to a central coordinate system
// Assuming a logical grid where (0,0) is center, and we scale by a factor to get pixels.
const SCALE = 150;

const KIOSKS = [
  { id: "reception", title: "Reception / About", x: 0, y: 1, icon: Contact },
  { id: "generative-forge", title: "Generative Forge", x: -1.5, y: -0.5, icon: TerminalSquare },
  { id: "agentic-workshop", title: "Agentic Workshop", x: 1.5, y: -0.5, icon: Cpu },
  { id: "vision-lab", title: "Vision Lab", x: -2, y: 1.5, icon: Eye },
  { id: "rl-arena", title: "RL Arena", x: 2, y: 1.5, icon: BrainCircuit },
  { id: "deployment-deck", title: "Deployment Deck", x: 0, y: -2, icon: Rocket },
];

export function Map() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Center coordinates of the container (calculated on mount and resize)
  const [center, setCenter] = useState({ x: 0, y: 0 });
  
  // Avatar position (starts at Reception)
  const [avatarPos, setAvatarPos] = useState({ x: 0, y: 0 });
  
  // Active Kiosk (for Modal)
  const [activeKiosk, setActiveKiosk] = useState<string | null>(null);
  
  // Initialize center and starting position
  useEffect(() => {
    const updateCenter = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const cx = width / 2;
        const cy = height / 2;
        setCenter({ x: cx, y: cy });
        
        // If avatar isn't set yet (or we are resizing and want to keep it relative)
        // For simplicity, we just set the initial position to Reception if it's (0,0) relative.
        if (avatarPos.x === 0 && avatarPos.y === 0) {
           const reception = KIOSKS.find(k => k.id === "reception");
           if (reception) {
             setAvatarPos({
               x: cx + reception.x * SCALE,
               y: cy + reception.y * SCALE + 60, // Avatar stands slightly below kiosk
             });
           }
        }
      }
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKioskClick = (id: string, x: number, y: number) => {
    // Move avatar to the kiosk
    setAvatarPos({ x, y });
    
    // Open modal after a slight delay to let the avatar walk there
    setTimeout(() => {
      setActiveKiosk(id);
    }, 600);
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only move if they clicked directly on the map background
    if (e.target === e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setAvatarPos({ x, y });
    }
  };

  const activeKioskData = KIOSKS.find(k => k.id === activeKiosk);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-zinc-950 cursor-crosshair selection:bg-indigo-500/30"
      onClick={handleMapClick}
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.8)_100%)]" />

      {/* Render Kiosks */}
      {center.x > 0 && KIOSKS.map((kiosk) => (
        <Kiosk
          key={kiosk.id}
          id={kiosk.id}
          title={kiosk.title}
          icon={kiosk.icon}
          x={center.x + kiosk.x * SCALE}
          y={center.y + kiosk.y * SCALE}
          onClick={handleKioskClick}
          isActive={activeKiosk === kiosk.id}
        />
      ))}

      {/* Render Avatar */}
      {center.x > 0 && (
        <Avatar x={avatarPos.x} y={avatarPos.y} />
      )}

      {/* Instructions Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Click on a <span className="text-indigo-400">Kiosk</span> to explore skills and projects.
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={activeKiosk !== null} 
        onClose={() => setActiveKiosk(null)}
        title={activeKioskData?.title || ""}
      >
        {activeKiosk && <KioskContent kioskId={activeKiosk} />}
      </Modal>
    </div>
  );
}

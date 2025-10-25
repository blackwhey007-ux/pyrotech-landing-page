import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import ErrorBoundary from '../shared/ErrorBoundary';

interface FireworkParticle {
  position: [number, number, number];
  velocity: [number, number, number];
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface Firework {
  id: number;
  particles: FireworkParticle[];
  exploded: boolean;
  launchTime: number;
}

const FireworkParticleSystem: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [particles, setParticles] = useState<Float32Array>(new Float32Array(0));
  const [colors, setColors] = useState<Float32Array>(new Float32Array(0));
  const [sizes, setSizes] = useState<Float32Array>(new Float32Array(0));
  const [lastLaunch, setLastLaunch] = useState(0);

  const fireworkColors = [
    '#DC143C', '#FF0000', '#8B0000', // Reds
    '#FFD700', '#FFA500', '#FFEB3B'  // Yellows/Golds
  ];

  const createFirework = (x: number, z: number): Firework => {
    const particleCount = 200 + Math.random() * 300; // Reduced particle count for better performance
    const fireworkParticles: FireworkParticle[] = [];
    
    // Create multiple burst patterns for more realistic effect
    const burstCount = 2 + Math.floor(Math.random() * 2); // 2-3 bursts per firework
    
    for (let burst = 0; burst < burstCount; burst++) {
      const burstDelay = burst * 200; // Stagger bursts
      const burstParticles = Math.floor(particleCount / burstCount);
      
      for (let i = 0; i < burstParticles; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 6; // EVEN FASTER
        const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
        
        fireworkParticles.push({
          position: [x + (Math.random() - 0.5) * 2, 0, z + (Math.random() - 0.5) * 2],
          velocity: [
            Math.cos(angle) * speed,
            8 + Math.random() * 6, // EVEN HIGHER launch
            Math.sin(angle) * speed
          ],
          life: -burstDelay, // Negative life for delayed bursts
          maxLife: 3000 + Math.random() * 2000, // EVEN LONGER
          color,
          size: 1.0 + Math.random() * 3 // EVEN LARGER particles
        });
      }
    }

    return {
      id: Date.now(),
      particles: fireworkParticles,
      exploded: false,
      launchTime: Date.now()
    };
  };

  const updateParticles = () => {
    const allParticles: number[] = [];
    const allColors: number[] = [];
    const allSizes: number[] = [];

    fireworks.forEach(firework => {
      firework.particles.forEach(particle => {
        if (particle.life >= 0 && particle.life < particle.maxLife) {
          allParticles.push(
            particle.position[0],
            particle.position[1],
            particle.position[2]
          );
          
          const color = new THREE.Color(particle.color);
          const lifeRatio = particle.life / particle.maxLife;
          const alpha = Math.max(0, 1 - lifeRatio * lifeRatio); // Fade out faster
          
          allColors.push(color.r * alpha, color.g * alpha, color.b * alpha);
          allSizes.push(particle.size * (0.5 + alpha * 0.5)); // Size based on life
        }
      });
    });

    setParticles(new Float32Array(allParticles));
    setColors(new Float32Array(allColors));
    setSizes(new Float32Array(allSizes));
  };

  useFrame((_, delta) => {
    const now = Date.now();
    
    // Launch new firework every 2-4 seconds (less frequent for better performance)
    if (now - lastLaunch > 2000 + Math.random() * 2000) {
      const x = (Math.random() - 0.5) * 20; // Reduced spread
      const z = (Math.random() - 0.5) * 20; // Reduced spread
      setFireworks(prev => {
        // Limit total fireworks to prevent memory issues
        const newFireworks = [...prev, createFirework(x, z)];
        return newFireworks.length > 5 ? newFireworks.slice(-5) : newFireworks;
      });
      setLastLaunch(now);
    }

    // Update existing fireworks
    setFireworks(prev => prev.map(firework => {
      const updatedParticles = firework.particles.map(particle => {
        const newLife = particle.life + delta * 1000;
        const lifeRatio = newLife / particle.maxLife;
        
        // Apply physics
        const newPosition: [number, number, number] = [
          particle.position[0] + particle.velocity[0] * delta,
          particle.position[1] + particle.velocity[1] * delta,
          particle.position[2] + particle.velocity[2] * delta
        ];
        
        const newVelocity: [number, number, number] = [
          particle.velocity[0] * 0.98, // Air resistance
          particle.velocity[1] - 9.8 * delta, // Gravity
          particle.velocity[2] * 0.98 // Air resistance
        ];

        return {
          ...particle,
          position: newPosition,
          velocity: newVelocity,
          life: newLife,
          size: particle.size * (1 - lifeRatio * 0.5)
        };
      }).filter(particle => particle.life < particle.maxLife);

      return {
        ...firework,
        particles: updatedParticles
      };
    }).filter(firework => firework.particles.length > 0));

    updateParticles();
  });

  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      // Clear all fireworks and particles on unmount
      setFireworks([]);
      setParticles(new Float32Array(0));
      setColors(new Float32Array(0));
      setSizes(new Float32Array(0));
    };
  }, []);

  return (
    <Points ref={pointsRef} positions={particles} colors={colors} sizes={sizes}>
      <PointMaterial
        size={0.25}
        transparent
        opacity={1.0}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        alphaTest={0.1}
      />
    </Points>
  );
};

const Fireworks3D: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
  const checkWebGL = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.warn('WebGL not supported on this device');
        setWebglSupported(false);
        return;
      }
      
      // Test WebGL capabilities with proper typing
      try {
        const webglContext = gl as WebGLRenderingContext;
        const maxTextureSize = webglContext.getParameter(webglContext.MAX_TEXTURE_SIZE);
        const maxVertexAttribs = webglContext.getParameter(webglContext.MAX_VERTEX_ATTRIBS);
        
        if (maxTextureSize < 1024 || maxVertexAttribs < 8) {
          console.warn('WebGL capabilities insufficient for particle effects');
          setWebglSupported(false);
          return;
        }
      } catch (e) {
        console.warn('WebGL parameter check failed:', e);
        setWebglSupported(false);
        return;
      }
      
      setWebglSupported(true);
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      setWebglSupported(false);
    }
  };
    
    const checkPerformance = () => {
      // Check device performance capabilities for future optimization
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl');
        if (gl) {
          // Simple performance check without complex WebGL calls
          console.log('WebGL Performance: Available');
        }
      } catch (e) {
        console.log('WebGL Performance: Not available');
      }
    };

    checkMobile();
    checkWebGL();
    checkPerformance();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile || !webglSupported) {
    // CSS fallback for mobile or when WebGL is not supported
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="firework-css-animation">
          <div className="firework firework-1" />
          <div className="firework firework-2" />
          <div className="firework firework-3" />
          <div className="firework firework-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <ErrorBoundary
        fallback={
          <div className="absolute inset-0 bg-gradient-dark opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-2xl mb-2">🎆</div>
              <p className="text-sm">Fireworks loading...</p>
            </div>
          </div>
        }
        onError={(error) => {
          console.error('Fireworks3D Error:', error);
        }}
      >
        <Canvas
          camera={{ position: [0, 8, 15], fov: 75 }}
          style={{ background: 'transparent' }}
          gl={{ 
            alpha: true, 
            antialias: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            depth: true,
            stencil: false
          }}
          onError={(error) => {
            console.error('Three.js Canvas Error:', error);
            setWebglSupported(false);
          }}
          onCreated={({ gl }) => {
            // Additional WebGL context validation
            try {
              const canvas = gl.domElement;
              const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
              if (!context) {
                console.warn('WebGL context lost during initialization');
                setWebglSupported(false);
              }
            } catch (e) {
              console.warn('WebGL context validation failed:', e);
              setWebglSupported(false);
            }
          }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 15, 0]} intensity={1.0} color="#FFD700" />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#DC143C" />
          <pointLight position={[-10, 10, -10]} intensity={0.5} color="#FFA500" />
          <FireworkParticleSystem />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default Fireworks3D;

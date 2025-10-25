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
  brightness: number;
  rotation: number;
  rotationSpeed: number;
  trail: [number, number, number][];
  sparkle: boolean;
}

interface LaunchParticle {
  position: [number, number, number];
  velocity: [number, number, number];
  life: number;
  maxLife: number;
  color: string;
  size: number;
  brightness: number;
  trail: [number, number, number][];
}

interface Firework {
  id: number;
  particles: FireworkParticle[];
  launchParticles: LaunchParticle[];
  exploded: boolean;
  launchTime: number;
  explosionTime: number;
  launchPosition: [number, number, number];
  explosionPosition: [number, number, number];
  pattern: 'spherical' | 'willow' | 'palm' | 'chrysanthemum' | 'ring';
}

const FireworkParticleSystem: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [particles, setParticles] = useState<Float32Array>(new Float32Array(0));
  const [colors, setColors] = useState<Float32Array>(new Float32Array(0));
  const [sizes, setSizes] = useState<Float32Array>(new Float32Array(0));
  const [lastLaunch, setLastLaunch] = useState(0);

  // DEBUG: Log when component mounts
  useEffect(() => {
    console.log('🎆 FireworkParticleSystem: Component mounted and ready!');
    console.log('🎆 Enhanced fireworks with 400-800 particles per burst!');
    return () => {
      console.log('🎆 FireworkParticleSystem: Component unmounting');
    };
  }, []);

  const fireworkColors = [
    '#FFD700', '#FFA500', '#FFEB3B', // Bright yellows (cores)
    '#DC143C', '#FF0000', '#FF6B6B', // Reds
    '#8B0000', '#B22222', '#CD5C5C', // Dark reds
    '#FF69B4', '#FF1493', '#C71585', // Pinks
    '#00BFFF', '#1E90FF', '#4169E1', // Blues
    '#32CD32', '#00FF00', '#ADFF2F'  // Greens
  ];

  const patterns: Array<'spherical' | 'willow' | 'palm' | 'chrysanthemum' | 'ring'> = [
    'spherical', 'willow', 'palm', 'chrysanthemum', 'ring'
  ];

  const createLaunchParticles = (startPos: [number, number, number], endPos: [number, number, number]): LaunchParticle[] => {
    const launchParticles: LaunchParticle[] = [];
    const particleCount = 15 + Math.random() * 10;
    
    for (let i = 0; i < particleCount; i++) {
      const progress = Math.random();
      const currentPos: [number, number, number] = [
        startPos[0] + (endPos[0] - startPos[0]) * progress,
        startPos[1] + (endPos[1] - startPos[1]) * progress,
        startPos[2] + (endPos[2] - startPos[2]) * progress
      ];
      
      launchParticles.push({
        position: currentPos,
        velocity: [
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5
        ],
        life: 0,
        maxLife: 1000 + Math.random() * 500,
        color: '#FFD700',
        size: 0.5 + Math.random() * 1,
        brightness: 1.0,
        trail: [currentPos]
      });
    }
    
    return launchParticles;
  };

  const createExplosionParticles = (pos: [number, number, number], pattern: string, color: string): FireworkParticle[] => {
    const particles: FireworkParticle[] = [];
    const particleCount = 400 + Math.random() * 400; // MUCH MORE particles for visibility
    
    for (let i = 0; i < particleCount; i++) {
      let velocity: [number, number, number];
      let size: number;
      let brightness: number;
      let sparkle = false;
      
      // Create different patterns
      switch (pattern) {
        case 'spherical':
          const angle1 = Math.random() * Math.PI * 2;
          const angle2 = Math.random() * Math.PI;
          const speed = 5 + Math.random() * 10; // Faster explosions
          velocity = [
            Math.sin(angle2) * Math.cos(angle1) * speed,
            Math.cos(angle2) * speed,
            Math.sin(angle2) * Math.sin(angle1) * speed
          ];
          size = 2.0 + Math.random() * 3; // MUCH LARGER particles
          brightness = 1.2 + Math.random() * 0.3; // BRIGHTER
          break;
          
        case 'willow':
          const angle = Math.random() * Math.PI * 2;
          const speed_w = 3 + Math.random() * 6; // Faster
          velocity = [
            Math.cos(angle) * speed_w,
            -Math.random() * 4, // More downward bias
            Math.sin(angle) * speed_w
          ];
          size = 2.5 + Math.random() * 3; // MUCH LARGER
          brightness = 1.0 + Math.random() * 0.4; // BRIGHTER
          break;
          
        case 'palm':
          const palmAngle = Math.random() * Math.PI * 2;
          const palmSpeed = 6 + Math.random() * 8; // Faster
          velocity = [
            Math.cos(palmAngle) * palmSpeed,
            Math.random() * 3,
            Math.sin(palmAngle) * palmSpeed
          ];
          size = 2.2 + Math.random() * 2.5; // MUCH LARGER
          brightness = 1.1 + Math.random() * 0.4; // BRIGHTER
          break;
          
        case 'chrysanthemum':
          const chrysAngle = Math.random() * Math.PI * 2;
          const chrysSpeed = 4 + Math.random() * 7; // Faster
          const distance = Math.random();
          velocity = [
            Math.cos(chrysAngle) * chrysSpeed * distance,
            Math.random() * 4,
            Math.sin(chrysAngle) * chrysSpeed * distance
          ];
          size = 1.8 + Math.random() * 2.5; // MUCH LARGER
          brightness = 1.3 + Math.random() * 0.3; // VERY BRIGHT
          break;
          
        case 'ring':
          const ringAngle = Math.random() * Math.PI * 2;
          const ringSpeed = 5 + Math.random() * 6; // Faster
          velocity = [
            Math.cos(ringAngle) * ringSpeed,
            Math.random() * 2,
            Math.sin(ringAngle) * ringSpeed
          ];
          size = 2.0 + Math.random() * 2.5; // MUCH LARGER
          brightness = 1.1 + Math.random() * 0.3; // BRIGHTER
          break;
          
        default:
          velocity = [0, 0, 0];
          size = 1;
          brightness = 1;
      }
      
      // Add sparkle effect (random bright particles) - MORE SPARKLES
      if (Math.random() < 0.25) { // 25% chance instead of 10%
        sparkle = true;
        brightness = 2.0; // VERY BRIGHT sparkles
        size *= 2.0; // MUCH LARGER sparkles
      }
      
      particles.push({
        position: [pos[0], pos[1], pos[2]],
        velocity,
        life: 0,
        maxLife: 2000 + Math.random() * 3000,
        color,
        size,
        brightness,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        trail: [[pos[0], pos[1], pos[2]]],
        sparkle
      });
    }
    
    return particles;
  };

  const createFirework = (x: number, z: number): Firework => {
    const launchPos: [number, number, number] = [x, 0, z];
    const explosionHeight = 8 + Math.random() * 8;
    const explosionPos: [number, number, number] = [x, explosionHeight, z];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    
    const launchParticles = createLaunchParticles(launchPos, explosionPos);
    const explosionParticles = createExplosionParticles(explosionPos, pattern, color);
    
    // DEBUG: Log firework creation
    console.log(`🎆 Creating firework: pattern=${pattern}, color=${color}, particles=${explosionParticles.length}`);
    
    return {
      id: Date.now(),
      particles: explosionParticles,
      launchParticles,
      exploded: false,
      launchTime: Date.now(),
      explosionTime: Date.now() + 1000 + Math.random() * 1000, // 1-2 second delay
      launchPosition: launchPos,
      explosionPosition: explosionPos,
      pattern
    };
  };

  const updateParticles = () => {
    const allParticles: number[] = [];
    const allColors: number[] = [];
    const allSizes: number[] = [];

    fireworks.forEach(firework => {
      // Update launch particles
      firework.launchParticles.forEach(particle => {
        if (particle.life >= 0 && particle.life < particle.maxLife) {
          allParticles.push(
            particle.position[0],
            particle.position[1],
            particle.position[2]
          );
          
          const color = new THREE.Color(particle.color);
          const lifeRatio = particle.life / particle.maxLife;
          const alpha = Math.max(0, 1 - lifeRatio * lifeRatio);
          
          allColors.push(color.r * alpha * particle.brightness, color.g * alpha * particle.brightness, color.b * alpha * particle.brightness);
          allSizes.push(particle.size * (0.3 + alpha * 0.7));
        }
      });

      // Update explosion particles
      firework.particles.forEach(particle => {
        if (particle.life >= 0 && particle.life < particle.maxLife) {
          allParticles.push(
            particle.position[0],
            particle.position[1],
            particle.position[2]
          );
          
          const color = new THREE.Color(particle.color);
          const lifeRatio = particle.life / particle.maxLife;
          let alpha = Math.max(0, 1 - lifeRatio * lifeRatio);
          
          // Enhanced brightness for sparkles
          if (particle.sparkle) {
            alpha *= (1 + Math.sin(particle.life * 0.01) * 0.5);
          }
          
          allColors.push(color.r * alpha * particle.brightness, color.g * alpha * particle.brightness, color.b * alpha * particle.brightness);
          allSizes.push(particle.size * (0.4 + alpha * 0.6));
        }
      });
    });

    setParticles(new Float32Array(allParticles));
    setColors(new Float32Array(allColors));
    setSizes(new Float32Array(allSizes));
  };

  useFrame((_, delta) => {
    const now = Date.now();
    
    // Launch new firework every 1-2 seconds (MUCH MORE FREQUENT for dramatic effect!)
    if (now - lastLaunch > 1000 + Math.random() * 1000) {
      const x = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 25;
      console.log(`🚀 Launching new firework at x=${x.toFixed(2)}, z=${z.toFixed(2)}`);
      setFireworks(prev => {
        const newFireworks = [...prev, createFirework(x, z)];
        console.log(`🎆 Total active fireworks: ${newFireworks.length}`);
        return newFireworks.length > 6 ? newFireworks.slice(-6) : newFireworks; // Allow more simultaneous fireworks
      });
      setLastLaunch(now);
    }

    // Update existing fireworks
    setFireworks(prev => prev.map(firework => {
      const now = Date.now();
      
      // Update launch particles
      const updatedLaunchParticles = firework.launchParticles.map(particle => {
        const newLife = particle.life + delta * 1000;
        const lifeRatio = newLife / particle.maxLife;
        
        // Launch particles move upward with slight drift
        const newPosition: [number, number, number] = [
          particle.position[0] + particle.velocity[0] * delta,
          particle.position[1] + particle.velocity[1] * delta + 2 * delta, // Upward movement
          particle.position[2] + particle.velocity[2] * delta
        ];
        
        const newVelocity: [number, number, number] = [
          particle.velocity[0] * 0.95, // Air resistance
          particle.velocity[1] * 0.95,
          particle.velocity[2] * 0.95
        ];

        // Add to trail
        const newTrail = [...particle.trail, newPosition];
        if (newTrail.length > 5) newTrail.shift();

        return {
          ...particle,
          position: newPosition,
          velocity: newVelocity,
          life: newLife,
          trail: newTrail,
          brightness: 1.0 - lifeRatio * 0.5
        };
      }).filter(particle => particle.life < particle.maxLife);

      // Update explosion particles (only after explosion time)
      let updatedParticles = firework.particles;
      if (now >= firework.explosionTime) {
        updatedParticles = firework.particles.map(particle => {
          const newLife = particle.life + delta * 1000;
          const lifeRatio = newLife / particle.maxLife;
          
          // Enhanced physics with wind and air resistance
          const windEffect = Math.sin(now * 0.001) * 0.1; // Gentle wind
          const airResistance = 0.98 + (particle.size * 0.01); // Size-based resistance
          
          const newPosition: [number, number, number] = [
            particle.position[0] + particle.velocity[0] * delta,
            particle.position[1] + particle.velocity[1] * delta,
            particle.position[2] + particle.velocity[2] * delta
          ];
          
          const newVelocity: [number, number, number] = [
            (particle.velocity[0] + windEffect) * airResistance,
            particle.velocity[1] - 9.8 * delta * (1 + particle.size * 0.1), // Gravity with size factor
            (particle.velocity[2] + windEffect) * airResistance
          ];

          // Add rotation
          const newRotation = particle.rotation + particle.rotationSpeed * delta * 1000;

          // Add to trail
          const newTrail = [...particle.trail, newPosition];
          if (newTrail.length > 8) newTrail.shift();

          return {
            ...particle,
            position: newPosition,
            velocity: newVelocity,
            life: newLife,
            rotation: newRotation,
            trail: newTrail,
            brightness: Math.max(0.1, 1.0 - lifeRatio * 0.8)
          };
        }).filter(particle => particle.life < particle.maxLife);
      }

      return {
        ...firework,
        particles: updatedParticles,
        launchParticles: updatedLaunchParticles,
        exploded: now >= firework.explosionTime
      };
    }).filter(firework => 
      firework.particles.length > 0 || firework.launchParticles.length > 0
    ));

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
        size={0.5} // DOUBLED base size for much more visibility
        transparent
        opacity={1.0}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        alphaTest={0.05} // Lower alpha test for more visible particles
      />
    </Points>
  );
};

const Fireworks3D: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    console.log('🎆 Fireworks3D: Main component mounting...');
    console.log('🎆 Window size:', window.innerWidth, 'x', window.innerHeight);
    
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      console.log('🎆 Device type:', mobile ? 'MOBILE' : 'DESKTOP');
    };
    
  const checkWebGL = () => {
    console.log('🎆 Checking WebGL support...');
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        console.error('❌ WebGL not supported on this device');
        setWebglSupported(false);
        return;
      }
      
      console.log('✅ WebGL context created successfully');
      
      // Test WebGL capabilities with proper typing
      try {
        const webglContext = gl as WebGLRenderingContext;
        const maxTextureSize = webglContext.getParameter(webglContext.MAX_TEXTURE_SIZE);
        const maxVertexAttribs = webglContext.getParameter(webglContext.MAX_VERTEX_ATTRIBS);
        
        console.log('🎆 WebGL capabilities:', {
          maxTextureSize,
          maxVertexAttribs
        });
        
        if (maxTextureSize < 1024 || maxVertexAttribs < 8) {
          console.error('❌ WebGL capabilities insufficient for particle effects');
          setWebglSupported(false);
          return;
        }
      } catch (e) {
        console.error('❌ WebGL parameter check failed:', e);
        setWebglSupported(false);
        return;
      }
      
      console.log('✅ WebGL fully supported and ready!');
      setWebglSupported(true);
    } catch (e) {
      console.error('❌ WebGL initialization failed:', e);
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
    console.log('🎆 Using CSS fallback animation (mobile or WebGL not supported)');
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

  console.log('🎆 Rendering 3D Canvas with WebGL...');

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
          console.error('❌ Fireworks3D ErrorBoundary caught error:', error);
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
            console.error('❌ Three.js Canvas Error:', error);
            setWebglSupported(false);
          }}
          onCreated={({ gl }) => {
            console.log('✅ Three.js Canvas created successfully!');
            console.log('🎆 Starting enhanced firework animation...');
            // Additional WebGL context validation
            try {
              const canvas = gl.domElement;
              const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
              if (!context) {
                console.error('❌ WebGL context lost during initialization');
                setWebglSupported(false);
              } else {
                console.log('✅ WebGL context is active and rendering!');
              }
            } catch (e) {
              console.error('❌ WebGL context validation failed:', e);
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

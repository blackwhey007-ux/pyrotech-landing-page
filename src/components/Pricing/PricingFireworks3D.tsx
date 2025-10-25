import { useRef, useEffect, useState } from 'react';
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
    console.log('🎆 PricingFireworks3D: Component mounted and ready!');
    console.log('🎆 Pricing fireworks with 300-600 particles per burst!');
    return () => {
      console.log('🎆 PricingFireworks3D: Component unmounting');
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
    const particleCount = 12 + Math.random() * 8; // Slightly fewer for pricing section
    
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
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3
        ],
        life: 0,
        maxLife: 800 + Math.random() * 400,
        color: '#FFD700',
        size: 0.4 + Math.random() * 0.8,
        brightness: 1.0,
        trail: [currentPos]
      });
    }
    
    return launchParticles;
  };

  const createExplosionParticles = (position: [number, number, number], pattern: string, color: string): FireworkParticle[] => {
    const particles: FireworkParticle[] = [];
    const particleCount = 300 + Math.random() * 300; // 300-600 particles for pricing section
    
    for (let i = 0; i < particleCount; i++) {
      let velocity: [number, number, number];
      
      switch (pattern) {
        case 'spherical':
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          const speed = 0.5 + Math.random() * 1.5;
          velocity = [
            speed * Math.sin(phi) * Math.cos(theta),
            speed * Math.sin(phi) * Math.sin(theta),
            speed * Math.cos(phi)
          ];
          break;
          
        case 'willow':
          const angle = Math.random() * Math.PI * 2;
          const speed2 = 0.3 + Math.random() * 0.7;
          velocity = [
            speed2 * Math.cos(angle),
            speed2 * Math.sin(angle) * 0.3,
            -Math.random() * 0.5 - 0.2
          ];
          break;
          
        case 'palm':
          const angle2 = Math.random() * Math.PI * 2;
          const speed3 = 0.2 + Math.random() * 0.6;
          velocity = [
            speed3 * Math.cos(angle2) * 0.5,
            speed3 * Math.sin(angle2) * 0.5,
            -Math.random() * 0.3 - 0.1
          ];
          break;
          
        case 'chrysanthemum':
          const angle3 = Math.random() * Math.PI * 2;
          const speed4 = 0.4 + Math.random() * 1.2;
          const radius = Math.random();
          velocity = [
            speed4 * Math.cos(angle3) * radius,
            speed4 * Math.sin(angle3) * radius,
            (Math.random() - 0.5) * 0.3
          ];
          break;
          
        case 'ring':
          const angle4 = Math.random() * Math.PI * 2;
          const speed5 = 0.6 + Math.random() * 0.8;
          velocity = [
            speed5 * Math.cos(angle4),
            speed5 * Math.sin(angle4),
            (Math.random() - 0.5) * 0.2
          ];
          break;
          
        default:
          velocity = [
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ];
      }
      
      particles.push({
        position: [...position] as [number, number, number],
        velocity,
        life: 0,
        maxLife: 1500 + Math.random() * 1000,
        color,
        size: 0.3 + Math.random() * 0.7,
        brightness: 1.0,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        trail: [position],
        sparkle: Math.random() > 0.7
      });
    }
    
    return particles;
  };

  const createFirework = (x: number, z: number): Firework => {
    const launchPos: [number, number, number] = [x, -15, z];
    const explosionHeight = 8 + Math.random() * 12;
    const explosionPos: [number, number, number] = [x, explosionHeight, z];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    
    return {
      id: Date.now() + Math.random(),
      particles: createExplosionParticles(explosionPos, pattern, color),
      launchParticles: createLaunchParticles(launchPos, explosionPos),
      exploded: false,
      launchTime: Date.now(),
      explosionTime: Date.now() + 1000 + Math.random() * 500,
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
      // Update explosion particles
      firework.particles.forEach(particle => {
        allParticles.push(particle.position[0], particle.position[1], particle.position[2]);
        
        const color = new THREE.Color(particle.color);
        allColors.push(color.r, color.g, color.b);
        allSizes.push(particle.size);
      });

      // Update launch particles
      firework.launchParticles.forEach(particle => {
        allParticles.push(particle.position[0], particle.position[1], particle.position[2]);
        
        const color = new THREE.Color(particle.color);
        allColors.push(color.r, color.g, color.b);
        allSizes.push(particle.size);
      });
    });

    setParticles(new Float32Array(allParticles));
    setColors(new Float32Array(allColors));
    setSizes(new Float32Array(allSizes));
  };

  useFrame(() => {
    const now = Date.now();
    
    // Launch new firework every 2-3 seconds (less frequent than hero)
    if (now - lastLaunch > 2000 + Math.random() * 1000) {
      const x = (Math.random() - 0.5) * 20; // Smaller range for pricing section
      const z = (Math.random() - 0.5) * 20;
      console.log(`🚀 Launching pricing firework at x=${x.toFixed(2)}, z=${z.toFixed(2)}`);
      setFireworks(prev => {
        const newFireworks = [...prev, createFirework(x, z)];
        console.log(`🎆 Total active pricing fireworks: ${newFireworks.length}`);
        return newFireworks.length > 4 ? newFireworks.slice(-4) : newFireworks; // Limit to 4 simultaneous
      });
      setLastLaunch(now);
    }

    // Update existing fireworks
    setFireworks(prev => prev.map(firework => {
      const now = Date.now();
      
      // Update launch particles
      firework.launchParticles = firework.launchParticles.map(particle => {
        particle.life += 16;
        particle.position[0] += particle.velocity[0];
        particle.position[1] += particle.velocity[1];
        particle.position[2] += particle.velocity[2];
        particle.velocity[1] += 0.02; // Gravity
        particle.brightness = 1 - (particle.life / particle.maxLife);
        particle.trail.push([...particle.position] as [number, number, number]);
        if (particle.trail.length > 5) particle.trail.shift();
        return particle;
      }).filter(particle => particle.life < particle.maxLife);

      // Check if it's time to explode
      if (!firework.exploded && now >= firework.explosionTime) {
        firework.exploded = true;
        console.log(`💥 Firework exploded with ${firework.particles.length} particles`);
      }

      // Update explosion particles
      if (firework.exploded) {
        firework.particles = firework.particles.map(particle => {
          particle.life += 16;
          particle.position[0] += particle.velocity[0];
          particle.position[1] += particle.velocity[1];
          particle.position[2] += particle.velocity[2];
          particle.velocity[1] -= 0.01; // Gravity
          particle.velocity[0] *= 0.99; // Air resistance
          particle.velocity[2] *= 0.99;
          particle.rotation += particle.rotationSpeed;
          particle.brightness = 1 - (particle.life / particle.maxLife);
          particle.trail.push([...particle.position] as [number, number, number]);
          if (particle.trail.length > 8) particle.trail.shift();
          return particle;
        }).filter(particle => particle.life < particle.maxLife);
      }

      return firework;
    }).filter(firework => 
      firework.particles.length > 0 || firework.launchParticles.length > 0
    ));

    updateParticles();
  });

  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      setFireworks([]);
      setParticles(new Float32Array(0));
      setColors(new Float32Array(0));
      setSizes(new Float32Array(0));
    };
  }, []);

  return (
    <Points ref={pointsRef} positions={particles} colors={colors} sizes={sizes}>
      <PointMaterial
        size={0.8}
        transparent
        opacity={1.0}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        alphaTest={0.05}
      />
    </Points>
  );
};

const PricingFireworks3D: React.FC = () => {
  useEffect(() => {
    console.log('🌟 PricingFireworks3D: Component mounted');
    return () => {
      console.log('🌟 PricingFireworks3D: Component unmounting');
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 0], fov: 75, near: 0.1, far: 1000 }}
          style={{ background: 'transparent' }}
        >
          <FireworkParticleSystem />
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default PricingFireworks3D;


import React, { useRef, useEffect, useCallback } from 'react';
import { ParticleConfig } from '../../types';

interface ParticleEffectProps {
  config: ParticleConfig;
  trigger: boolean;
  onComplete?: () => void;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  alpha: number;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({
  config,
  trigger,
  onComplete,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = config.speed * (0.5 + Math.random() * 0.5);
    
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: config.lifespan,
      size: config.size * (0.5 + Math.random() * 0.5),
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      alpha: 1
    };
  }, [config]);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.life += 16; // Assuming 60fps
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // Gravity
      particle.alpha = 1 - (particle.life / particle.maxLife);

      if (particle.life >= particle.maxLife) {
        return false;
      }

      // Draw particle
      ctx.save();
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      return true;
    });

    // Check if animation is complete
    if (particlesRef.current.length === 0 && onComplete) {
      onComplete();
    } else {
      animationRef.current = requestAnimationFrame(updateParticles);
    }
  }, [onComplete]);

  const startEffect = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clear existing particles to prevent memory leaks
    particlesRef.current = [];

    const rect = canvas.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Create particles
    for (let i = 0; i < config.count; i++) {
      particlesRef.current.push(createParticle(centerX, centerY));
    }

    // Start animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    updateParticles();
  }, [config, createParticle, updateParticles]);

  useEffect(() => {
    if (trigger) {
      startEffect();
    }
  }, [trigger, startEffect]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clear particles array to prevent memory leaks
      particlesRef.current = [];
    };
  }, []);

  // Cleanup effect to prevent memory leaks
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      particlesRef.current = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 10 }}
    />
  );
};

export default ParticleEffect;

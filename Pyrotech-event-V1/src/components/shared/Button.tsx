import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseClasses = 'relative font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';
  
  const variantClasses = {
    primary: 'bg-gradient-primary text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 focus:ring-yellow-500',
    secondary: 'border-2 border-white/20 text-white hover:border-primary-red hover:bg-primary-red/10 focus:ring-primary-red'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      animate={!disabled && !loading ? { y: [0, -2, 0] } : {}}
      transition={{ 
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.2 }
      }}
    >
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
      
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      
      {/* Spark trail effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Button;

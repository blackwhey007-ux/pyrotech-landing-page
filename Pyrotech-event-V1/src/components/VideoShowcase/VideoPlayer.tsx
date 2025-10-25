import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VideoItem } from '../../types';

interface VideoPlayerProps {
  video: VideoItem;
  index: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, index }) => {
  const [, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
        {/* Thumbnail/Video */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${video.thumbnail})`,
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-semibold">
            {video.category}
          </span>
        </div>

        {/* Play Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          onClick={handlePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border-2 border-white/30"
            animate={{
              scale: isHovered ? 1.1 : 1,
              boxShadow: isHovered 
                ? '0 0 40px rgba(255, 215, 0, 0.5)' 
                : '0 0 20px rgba(255, 255, 255, 0.2)'
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"
              animate={{ x: isHovered ? 2 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-red/20 to-primary-yellow/20 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Video Title */}
      <motion.h3
        className="text-white font-semibold mt-4 text-center"
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {video.title}
      </motion.h3>
    </motion.div>
  );
};

export default VideoPlayer;

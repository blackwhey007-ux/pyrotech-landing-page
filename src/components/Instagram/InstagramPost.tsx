import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play } from 'lucide-react';
import { InstagramPost as InstagramPostType } from '../../types';
import VideoModal from './VideoModal';

interface InstagramPostProps {
  post: InstagramPostType;
  index: number;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ post, index }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (post.isVideo) {
      setShowModal(true);
    } else {
      window.open(post.postUrl, '_blank');
    }
  };

  return (
    <>
      <motion.div
        className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-primary-yellow/50 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        onClick={handleClick}
      >
      {/* Image */}
      <div className="relative w-full h-full">
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Video Badge */}
        {post.isVideo && (
          <div className="absolute top-2 right-2 bg-primary-red px-2 py-1 rounded-md">
            <span className="text-white text-xs font-bold">REEL</span>
          </div>
        )}
        
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-red/20 to-primary-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        
        {/* Play Icon for Videos or Instagram Icon for Photos */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
            post.isVideo 
              ? 'bg-white/90 animate-pulse' 
              : 'bg-white/90'
          }`}>
            {post.isVideo ? (
              <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
            ) : (
              <Instagram className="w-6 h-6 text-black" />
            )}
          </div>
        </motion.div>
        
        {/* Stats (Optional) */}
        {(post.likes && post.comments) || (post.isVideo && post.views) && (
          <motion.div
            className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-3">
                {post.isVideo && post.views && (
                  <span className="flex items-center gap-1">
                    👁️ {post.views > 1000 ? `${(post.views / 1000).toFixed(1)}K` : post.views}
                  </span>
                )}
                {post.likes && (
                  <span className="flex items-center gap-1">
                    ❤️ {post.likes}
                  </span>
                )}
                {post.comments && (
                  <span className="flex items-center gap-1">
                    💬 {post.comments}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>

    {/* Video Modal */}
    {post.isVideo && (
      <VideoModal
        videoUrl={post.postUrl}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    )}
  </>
  );
};

export default InstagramPost;

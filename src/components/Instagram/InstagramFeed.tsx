import React from 'react';
import { INSTAGRAM_POSTS } from '../../utils/constants';
import InstagramPost from './InstagramPost';

const InstagramFeed: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {INSTAGRAM_POSTS.map((post, index) => (
        <InstagramPost
          key={post.id}
          post={post}
          index={index}
        />
      ))}
    </div>
  );
};

export default InstagramFeed;





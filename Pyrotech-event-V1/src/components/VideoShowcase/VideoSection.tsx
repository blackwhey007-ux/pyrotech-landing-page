import React from 'react';
import { VIDEO_ITEMS } from '../../utils/constants';
import VideoPlayer from './VideoPlayer';
import SectionTitle from '../shared/SectionTitle';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Unsere Spektakulären Shows"
          subtitle="Erleben Sie die Magie unserer Feuerwerke"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {VIDEO_ITEMS.map((video, index) => (
            <VideoPlayer
              key={video.id}
              video={video}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

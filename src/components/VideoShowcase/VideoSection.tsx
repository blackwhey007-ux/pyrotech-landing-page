import React from 'react';
import { useTranslation } from 'react-i18next';
import { VIDEO_ITEMS } from '../../utils/constants';
import VideoPlayer from './VideoPlayer';
import SectionTitle from '../shared/SectionTitle';

const VideoSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={t('video.title')}
          subtitle={t('video.subtitle')}
        />
        
        <div className="flex justify-center max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
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

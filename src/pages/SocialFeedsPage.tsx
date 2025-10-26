import React from 'react';
import VideoSection from '../components/VideoShowcase/VideoSection';
import InstagramSection from '../components/Instagram/InstagramSection';
import SectionSeparator from '../components/shared/SectionSeparator';

const SocialFeedsPage: React.FC = () => {
  return (
    <div>
      <VideoSection />
      <SectionSeparator />
      <InstagramSection />
    </div>
  );
};

export default SocialFeedsPage;


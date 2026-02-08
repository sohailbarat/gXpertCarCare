
import React from 'react';
import { Metadata } from 'next'; 
import Wrapper from '@/layouts/Wrapper';
import VideoGallery from '@/components/video-gallery';



export const metadata: Metadata = {
  title: 'Video Gallery - See Our Work in Action',
  description: 'Watch videos of our auto repair services, facility tours, and expert car care tips from G. Xpert Car Care in Calgary, AB.',
  alternates: {
    canonical: '/video-gallery',
  },
};


const index = () => {
  return (
    <Wrapper>
      <VideoGallery />
    </Wrapper>
  );
};

export default index;

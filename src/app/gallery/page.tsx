import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper'; 
import Gallery from '@/components/gallery';

export const metadata: Metadata = {
  title: 'Gallery - Our Work & Facility',
  description: 'Browse photos of our auto repair shop, completed work, and facility at G. Xpert Car Care in Calgary, AB. See the quality of our car repair and maintenance services.',
  alternates: {
    canonical: '/gallery',
  },
};


const index = () => {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  );
};

export default index;


import React from 'react';
import { Metadata } from 'next'; 
import Wrapper from '@/layouts/Wrapper';
import Testimonial from '@/components/testimonial';



export const metadata: Metadata = {
  title: 'Testimonials - Customer Reviews',
  description: 'Read what our satisfied customers say about G. Xpert Car Care in Calgary, AB. Honest service, quality workmanship, and transparent pricing. See our 5-star reviews.',
  alternates: {
    canonical: '/testimonial',
  },
};


const index = () => {
  return (
    <Wrapper>
      <Testimonial />
    </Wrapper>
  );
};

export default index;

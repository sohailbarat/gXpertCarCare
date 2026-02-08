import React from 'react';
import { Metadata } from 'next';
import Faq from '@/components/faq';
import Wrapper from '@/layouts/Wrapper';  

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about car repair, oil changes, tire services, wheel alignment, and vehicle inspections at G. Xpert Car Care in Calgary, AB.',
  alternates: {
    canonical: '/faq',
  },
};


const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;


import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import About from '@/components/about';

export const metadata: Metadata = {
  title: 'About Us - Trusted Auto Repair Shop in Calgary',
  description: 'Learn about G. Xpert Car Care, a trusted auto repair shop in Calgary, AB with over 20 years of experience. Certified technicians, transparent pricing, and comprehensive repair services.',
  alternates: {
    canonical: '/about',
  },
};



const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;

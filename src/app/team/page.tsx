
import React from 'react';
import { Metadata } from 'next';
import Team from '@/components/team';
import Wrapper from '@/layouts/Wrapper';



export const metadata: Metadata = {
  title: 'Our Team - Certified Auto Technicians',
  description: 'Meet the certified auto repair technicians at G. Xpert Car Care in Calgary, AB. Our skilled team brings 20+ years of experience to every vehicle they service.',
  alternates: {
    canonical: '/team',
  },
};


const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;

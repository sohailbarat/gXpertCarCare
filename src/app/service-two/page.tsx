
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import ServiceTwo from '@/components/service-two';

export const metadata: Metadata = {
  title: 'All Services - Auto Repair & Car Maintenance',
  description: 'Browse all automotive repair and maintenance services offered by G. Xpert Car Care in Calgary, AB. Certified technicians with 20+ years of experience.',
  alternates: {
    canonical: '/service-two',
  },
};



const index = () => {
  return (
    <Wrapper>
      <ServiceTwo />
    </Wrapper>
  );
};

export default index;

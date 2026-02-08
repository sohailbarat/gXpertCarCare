
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import Service from '@/components/service';

export const metadata: Metadata = {
  title: 'Services - Complete Auto Repair & Maintenance',
  description: 'Explore our full range of auto repair services including oil changes, tire services, wheel alignment, engine shampoo, brake repair, and vehicle inspections at G. Xpert Car Care Calgary.',
  alternates: {
    canonical: '/service',
  },
};


const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
};

export default index;

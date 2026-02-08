
import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import ServicesSingle from '@/components/services-single';

export const metadata: Metadata = {
  title: 'Service Details - Expert Auto Repair',
  description: 'Learn more about our specialized auto repair and maintenance services at G. Xpert Car Care in Calgary, AB. Quality workmanship with warranty on repairs.',
  alternates: {
    canonical: '/services-single',
  },
};


const index = () => {
  return (
    <Wrapper>
      <ServicesSingle />
    </Wrapper>
  );
};

export default index;

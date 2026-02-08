

import React from 'react';
import { Metadata } from 'next'; 
import Wrapper from '@/layouts/Wrapper';
import Appointment from '@/components/appointment';



export const metadata: Metadata = {
  title: 'Book an Appointment - Car Repair & Service',
  description: 'Schedule your car repair or maintenance appointment at G. Xpert Car Care in Calgary, AB. Oil changes, tire services, wheel alignment, inspections, and more. Call (587) 329-2528.',
  alternates: {
    canonical: '/appointment',
  },
};


const index = () => {
  return (
    <Wrapper>
      <Appointment />
    </Wrapper>
  );
};

export default index;

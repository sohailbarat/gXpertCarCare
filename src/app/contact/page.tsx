import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import Contact from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact G. Xpert Car Care in Calgary, AB for all your auto repair needs. Visit us at 2423 27 Ave NE, Calgary, AB T2E 8L2 or call (587) 329-2528. Open Mon-Sat 9AM-6PM.',
  alternates: {
    canonical: '/contact',
  },
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;

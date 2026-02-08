import React from 'react';
import { Metadata } from 'next';
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';

export const metadata: Metadata = {
  title: 'Blog - Car Care Tips & Auto Repair News',
  description: 'Read our latest car care tips, auto repair advice, and industry news from the certified technicians at G. Xpert Car Care in Calgary, AB.',
  alternates: {
    canonical: '/blog',
  },
};

const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;

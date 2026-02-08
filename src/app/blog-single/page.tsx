import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import BlogSingle from '@/components/blog-single';

export const metadata: Metadata = {
  title: 'Blog Post - Car Care Insights',
  description: 'Read in-depth car care articles and auto repair insights from the experienced team at G. Xpert Car Care in Calgary, AB.',
  alternates: {
    canonical: '/blog-single',
  },
};


const index = () => {
  return (
    <Wrapper>
      <BlogSingle />
    </Wrapper>
  );
};

export default index;

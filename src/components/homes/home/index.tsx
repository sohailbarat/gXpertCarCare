"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import HeroHomeOne from './HeroHomeOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceHomeOne from './ServiceHomeOne';
import WhoChoosHomeOne from './WhoChoosHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

// Lazy-load below-fold heavy components to reduce initial JS bundle
const Service2HomeOne = dynamic(() => import('./Service2HomeOne'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const TestimonialHomeOne = dynamic(() => import('./TestimonialHomeOne'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const PriceHomeOne = dynamic(() => import('./PriceHomeOne'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main id="main-content">
        <HeroHomeOne />
        <ServiceHomeOne />
        <WhoChoosHomeOne />
        <Service2HomeOne />
        <TestimonialHomeOne />
        <PriceHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;

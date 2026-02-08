import React from 'react';
import HeroHomeOne from './HeroHomeOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceHomeOne from './ServiceHomeOne';
import WhoChoosHomeOne from './WhoChoosHomeOne';
import LazyBelowFold from './LazyBelowFold';

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main id="main-content">
        <HeroHomeOne />
        <ServiceHomeOne />
        <WhoChoosHomeOne />
        <LazyBelowFold />
      </main>
    </>
  );
};

export default HomeOne;

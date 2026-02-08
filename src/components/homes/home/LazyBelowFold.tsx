"use client";

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const Service2HomeOne = dynamic(() => import('./Service2HomeOne'), { ssr: false });
const TestimonialHomeOne = dynamic(() => import('./TestimonialHomeOne'), { ssr: false });
const PriceHomeOne = dynamic(() => import('./PriceHomeOne'), { ssr: false });
const FooterOne = dynamic(() => import('@/layouts/footers/FooterOne'), { ssr: false });

export default function LazyBelowFold() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } // Start loading 300px before scrolling into view
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref}>
        {isVisible ? (
          <>
            <Service2HomeOne />
            <TestimonialHomeOne />
            <PriceHomeOne />
          </>
        ) : (
          <div style={{ minHeight: '1200px' }} />
        )}
      </div>
      {isVisible && <FooterOne />}
    </>
  );
}

"use client";
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';

const HeaderOne = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollTopRef = useRef(0);
    const headerHeightRef = useRef(0);
    const ticking = useRef(false);
  
    const updateHeader = useCallback(() => {
      const scrollTop = window.scrollY;
      const headerHeight = headerHeightRef.current;

      if (scrollTop >= headerHeight) {
        setIsSticky(true);
        setIsVisible(scrollTop < lastScrollTopRef.current);
      } else {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollTopRef.current = scrollTop;
      ticking.current = false;
    }, []);

    useEffect(() => { 
      const header = document.querySelector(".ak-sticky_header") as HTMLElement;
      if (!header) return;
      headerHeightRef.current = header.offsetHeight + 30;

      const handleScroll = () => {
        if (!ticking.current) {
          window.requestAnimationFrame(updateHeader);
          ticking.current = true;
        }
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [updateHeader]);

  return (
    <>
      <header  
      className={`ak-site_header ak-style1 ak-sticky_header ${isSticky ? "ak-gescout_sticky" : ""} ${isVisible ? "ak-gescout_show" : ""}`}
      role="banner"
      >
        <div className="ak-main_header">
            <div className="container">
                <div className="ak-main_header_in">
                    <div className="ak-main-header-left">
                        <Link className="ak-site_branding" href="/" aria-label="G. Xpert Car Care - Home">
                            <img src="assets/img/logo_1.svg" alt="G. Xpert Car Care Logo" width="180" height="50" />
                        </Link>
                    </div>
                    <div className="ak-main-header-right">
                        <a href="tel:1-587-329-2528" aria-label="Call G. Xpert Car Care at 1-587-329-2528">
                            <div className="d-flex align-items-center gap-3">
                                <div className="heartbeat-icon">
                                    <span className="ak-heartbeat-btn"><img src="assets/img/phone.svg" alt="Call us" width="24" height="24" /></span>
                                </div>
                                <h6> 1-587-329-2528 </h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-bar-border"></div>
    </header>
    </>
  );
};

export default HeaderOne;

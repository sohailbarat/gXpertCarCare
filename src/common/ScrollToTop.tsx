"use client"; 

import React, { useState, useEffect, useCallback } from "react";


const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = useCallback(() => {
		const shouldShow = window.pageYOffset > 400;
		setShowScroll(prev => {
			if (prev !== shouldShow) return shouldShow;
			return prev;
		});
	}, []);

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					checkScrollTop();
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [checkScrollTop]);

	return (
		<>  
			<span className={`ak-scrollup ${showScroll ? "ak-scrollup-show" : ""}`} onClick={scrollTop} aria-label="Scroll to top" role="button" tabIndex={0}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor"></path>
				</svg>
			</span>
		</>
	);
};

export default ScrollToTop;

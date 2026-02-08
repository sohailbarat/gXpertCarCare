"use client";

import { useEffect } from "react";
import ScrollToTop from "../common/ScrollToTop";
 
const Wrapper = ({ children }: any) => {
	useEffect(() => {
		// Dynamically import Bootstrap JS to avoid blocking main thread
		const loadBootstrap = async () => {
			if (typeof window !== "undefined") {
				await import("bootstrap/dist/js/bootstrap");
			}
		};
		// Defer Bootstrap loading until after initial paint
		if (document.readyState === "complete") {
			loadBootstrap();
		} else {
			window.addEventListener("load", () => loadBootstrap(), { once: true });
		}
	}, []);

	useEffect(() => {
		// Dynamically import AOS to avoid blocking main thread
		const loadAOS = async () => {
			const AOS = (await import("aos")).default;
			await import("aos/dist/aos.css");
			AOS.init({
				once: true,        // Only animate once (reduces re-paint work)
				duration: 600,     // Shorter default duration
				disable: "mobile", // Disable on mobile for better performance
			});
		};
		// Use requestIdleCallback to load AOS during idle time
		if ("requestIdleCallback" in window) {
			(window as any).requestIdleCallback(() => loadAOS());
		} else {
			setTimeout(() => loadAOS(), 200);
		}
	}, []);

	return (
		<>
			{children}
			<ScrollToTop />
		</>
	);
};

export default Wrapper;

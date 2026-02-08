import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HomeOne from "@/components/homes/home";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'G. Xpert Car Care | Auto Repair & Car Services in Calgary, AB',
  description: 'G. Xpert Car Care provides expert car repair, oil changes, tire services, wheel alignment, engine shampoo, and vehicle inspections in Calgary, AB. 20+ years of experience. Call (587) 329-2528.',
  alternates: {
    canonical: '/',
  },
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
			
		</Wrapper>
	);
};

export default index;

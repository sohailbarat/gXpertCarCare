import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HomeOne from "@/components/homes/home";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'G. Xpert Car Care',
  description: 'Car Repair & Auto Services',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;

import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import HomeTwo from "@/components/homes/home-2";

export const metadata: Metadata = {
	title: "G. Xpert Car Care | Auto Repair & Car Services in Calgary, AB",
	description: "G. Xpert Car Care provides expert car repair, oil changes, tire services, wheel alignment, engine shampoo, and vehicle inspections in Calgary, AB. Call (587) 329-2528.",
	robots: {
		index: false,
		follow: false,
	},
};

const index = () => {
	return (
		<Wrapper>
			<HomeTwo />
		</Wrapper>
	);
};

export default index;

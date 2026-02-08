import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import CommingSoon from "@/components/comming-soon";

export const metadata: Metadata = {
	title: "Coming Soon - New Services",
	description: "Exciting new auto repair services coming soon to G. Xpert Car Care in Calgary, AB. Stay tuned for updates!",
	robots: {
		index: false,
		follow: false,
	},
};

const index = () => {
	return (
		<Wrapper>
			<CommingSoon />
		</Wrapper>
	);
};

export default index;

import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import Pricing from "@/components/pricing";

export const metadata: Metadata = {
	title: "Pricing - Affordable Auto Repair Rates",
	description: "View transparent pricing for oil changes from $59.99, tire services from $14.99/tire, wheel alignment from $119.99, and vehicle inspections from $49.99 at G. Xpert Car Care Calgary.",
	alternates: {
		canonical: '/pricing',
	},
};

const index = () => {
	return (
		<Wrapper>
			<Pricing />
		</Wrapper>
	);
};

export default index;

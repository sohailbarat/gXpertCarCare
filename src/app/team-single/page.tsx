
import React from 'react';
import { Metadata } from 'next'; 
import Wrapper from '@/layouts/Wrapper';
import TeamSingle from '@/components/TeamSingle';



export const metadata: Metadata = {
  title: 'Team Member - Certified Technician Profile',
  description: 'Learn more about our certified auto repair technicians at G. Xpert Car Care in Calgary, AB. Experienced professionals dedicated to quality service.',
  alternates: {
    canonical: '/team-single',
  },
};


const index = () => {
  return (
    <Wrapper>
      <TeamSingle />
    </Wrapper>
  );
};

export default index;

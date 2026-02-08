import React from 'react';
import { Metadata } from 'next';
import Error from '@/components/error';
import Wrapper from '@/layouts/Wrapper';


export const metadata: Metadata = {
  title: 'Page Not Found - 404',
  description: 'The page you are looking for could not be found. Return to G. Xpert Car Care homepage for auto repair services in Calgary, AB.',
  robots: {
    index: false,
    follow: false,
  },
};


const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;

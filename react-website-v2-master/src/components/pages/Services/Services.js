import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Votes from '../../Votes';

function Services() {
  return (
    <>
      <Votes />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;

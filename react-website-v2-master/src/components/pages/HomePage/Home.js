import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Votes from '../../Votes';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <div id='1'>
      <Votes />

      </div>
      
      
    </>
  );
}

export default Home;

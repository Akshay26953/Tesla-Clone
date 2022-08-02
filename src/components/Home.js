import React from 'react';
import Data from '../data/carInfo.json';
import Section from './Section';

function Home() {
    const allSection = Data.map(item => {
        return <Section 
            title={item.title}
            subtitle={item.description}
            image={item.image}
            btnL={item.btnLeft}
            btnR={item.btnRight}
            id={item.id}
        />
    })
  return (
    <>
    {allSection}
    </>
  )
}

export default Home;

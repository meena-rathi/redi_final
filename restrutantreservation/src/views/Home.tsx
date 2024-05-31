import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import lunch1 from '../static/images/lunch1.webp';
import dinner1 from '../static/images/dinner1.jpg';



function Home()
{
    return(
        <div>
        <h1>Welcome to our restaurant</h1>
        <Carousel className="carousel-container">
          <div className="carousel-slide">
             <img src={lunch1} alt="Image 1" />
            <p className="legend">Caption for Image 1</p>
          </div>
          <div className="carousel-slide">
             <img src={dinner1} alt="Image 1" />
            <p className="legend">Caption for Image 1</p>
          </div>
        </Carousel>
      </div>
    );
   
  }
export default Home;
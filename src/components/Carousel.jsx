import React, {Component} from 'react'
import './Css/App.css'
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'  

import img1 from './img/605271-jordan-desktop-backgrounds-1920x1080-for-iphone.jpg';
import img2 from './img/v5s1s1h9j7hvy9howalg.jpg';
import img3 from './img/images.jpeg';
class Carousel extends Component  {
        render(){        
              return (  
                <OwlCarousel
                className="owl-theme"
                items='1'
                autoplay
                loop
                >
                     <div className=''><img src={img1}      /></div> 
                     <div className='item'><img src ={img2} /></div> 
                     <div className='item'><img src ={img3} /></div>                      
                     <div className='item'><img src ={img2} /></div> 

                 </OwlCarousel>
              )
        }
}

export default Carousel

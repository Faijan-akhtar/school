
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../../assets/shool2.jpg'
import pic2 from '../../assets/school3.jpg'
import pic3 from '../../assets/school4.jpg'
import pic4 from '../../assets/school5.jpg'
import pic5 from '../../assets/school6.jpg'
import logo from '../../assets/logo.jpg'
import '../Home/Home.css'

const Home = () => {
  return( 
  <>
  <div className="poster">
    
     <div className="logo">
      <img src={logo} alt='logo'/>
       <h1>M.A.G.U PUBLIC SCHOOL SAIYADRAJA</h1>
     </div> 

    <Carousel
    showThumbs={false}
    autoPlay={true}
    transitionTime={1}
    infiniteLoop={true}
    showStatus={false}
    >
        
        <img src={pic1} alt='image'/>
        <img src={pic2} alt='image'/>
        <img src={pic3} alt='image'/>
        <img src={pic4} alt='image'/>

        <img src={pic5} alt='image'/>
        


    </Carousel>
    <div className="about">
      <h3>Welcome to M.A.G.U Public School !</h3>
      <p>
Introducing you to the World’s Best Education System !
M.A.G.U public School (Dr. Amrit Lal Ishrat Memorial M.A.G.U School) was founded by the Late Mrs. Deesh Ishrat, a visionary and educationist, 
in the memory of the distinguished scholar Late Dr. Amrit Lal Ishrat.</p>
    </div>
    
  </div>
  </>


  )
}

export default Home;

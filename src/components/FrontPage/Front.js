import React from 'react';
import Hero from "../../animation/Hero.json";
import {motion} from 'framer-motion';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Lottie from "lottie-react";
import "./frontPage.css";
// import { Link } from "react-router-dom";

 const isScroll = () => window.scrollTo({top: 690, left: 0, behavior: 'smooth' });
//  const clickHandler = () => {
   
//     <Link to="/Yoga"></Link>
    
    
//  }

const btnVarient = {
    hover:{
        scale:1.2,
        transition:{
          yoyo:Infinity,
          duration:0.8,
          type:'spring',
          stiffness:110,
          originX:0
        }
    },
    hidden:{
      x:'-100vw'
    },
    visible:{
      x:0,
      transition:{
        type:'spring',
        delay:0.5,
        duration:0.1,
        stiffness:100,
      }
    }
    

  }

const Front = () => {
  return (
    <div className="flex flex-row items-center pt-36 md:flex-col ">
      <div className="main flex mr-8">
        <div className="flex-1 p-52">
        <h4 className='text-2xl'>Your fitness friend</h4>
        <div class="spacer"></div>
          <h1 className='text-5xl font-bold '>MindWell</h1>
          <div class="spacer"></div>
          <h4 className='text-2xl'>Empowering Your Mental Well-being....</h4>
         <motion.button 
          variants={btnVarient}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          onClick={isScroll}
         className="btn " style={{padding:"20px 20px"}}> Explore <ArrowRightAltIcon style={{marginLeft:15}}/></motion.button>
        </div>
        <div className='flex flex-row '>
        <Lottie animationData={Hero} style={{ size: 900, marginRight:"100px" }} />
        </div>
       
      </div>
    </div>
  )
}

export default Front

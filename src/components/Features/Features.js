import React from 'react';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import bmi from "../../animation/bmi.json";
import sandclock from "../../animation/sandclock.json";
import Ui from "../../animation/Ui.json";
import chakras from "../../animation/chakra.json"
import ChatBot from "../../animation/chatbot.json"
import "./Features.css"

const Features = () => {

    const btnVarient = {
        hover:{
            scale:[1,1.1,1],
            transition:{
              yoyo:Infinity,
              duration:0.8,
              type:'spring',
              stiffness:110
            }
        }
      }

  return (
    <div>
    <div className="middle">
      <h1 className='text-4xl font-sans pb-5 font-semibold' >Features we provide</h1>
      <div className="boxes">
      <motion.div
          variants={btnVarient}
          whileHover="hover"
        className="section">
          <h3>
            ChatBot
            <Lottie animationData={ChatBot} style={{ height: 120 }} />
          </h3>
        </motion.div>
      <motion.div
          variants={btnVarient}
          whileHover="hover"
        className="section3">
          <h3>
            Meditation Chakras
            <Lottie animationData={chakras} style={{ height: 120 }} />
          </h3>
        </motion.div>
        <motion.div
          variants={btnVarient}
          whileHover="hover"
        className="section">
          <h3>
            Meditation timer{" "}
            <Lottie animationData={sandclock} style={{ height: 120 }} />
          </h3>
        </motion.div>
        <motion.div
          variants={btnVarient}
          whileHover="hover"
        className="section1">
          <h3>
            BMI Calculator{" "}
            <Lottie animationData={bmi} style={{ height: 80 }} />
          </h3>
        </motion.div>
        <motion.div
          variants={btnVarient}
          whileHover="hover"
        className="section">
          <h3>
            Soothing Ui
            <Lottie animationData={Ui} style={{ height: 120 }} />
          </h3>
        </motion.div>
       
      </div>
    </div>
    </div>
  );
}

export default Features;

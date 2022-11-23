import React from "react";
import {motion} from 'framer-motion'

const Section = ({
  h3,
  text,
  img,
  hasBtn = true,
  btnTxt,
  imgSize = "70%",
  bgColor,
  headingColor,
  txtColor,
  btnBgColor,
  btnColor,
}) => {


  const headingOptions={
    initial:{y:'-100%', 
    opacity:0},
  
     whileInView:{y:'0',
     opacity:1}
  };

  const textOptions={
  ...headingOptions,
  transition:{
    delay:0.3
  }}
  const buttonOptions={
    initial:{y:'100%', 
    opacity:0},
  
     whileInView:{y:'0',
     opacity:1},
    transition:{
      delay:0.3,
      ease:"easeIn"
    }
  
  };


  const imgOptions={
    initial:{scale:0.1,

    opacity:0},
  
     whileInView:{scale:1,
     opacity:1},
    transition:{
      delay:0,
      ease:"easeIn"
    }
  
  };
  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div>
        <motion.h3  style={{ color: headingColor }} {...headingOptions}  >{h3}</motion.h3>
        <motion.p {...textOptions} style={{ color: txtColor }}>{text}</motion.p>
        {hasBtn && (
          <motion.button {...buttonOptions} style={{ color: btnColor, backgroundColor: btnBgColor }}> 
            {btnTxt}
          </motion.button>
        )}

        <div>
          <motion.img src={img} {...imgOptions} alt="ImgSrc"  style={{ width: imgSize }} />
        </div>
      </div>
    </section>
  );
};

export default Section;

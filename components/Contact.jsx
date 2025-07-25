import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { motion } from 'motion/react';

const Contact = ({isDarkMode,setIsDarkMode}) => {

  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29830ff4-8a19-4b49-a114-6791f9c7ac09");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-[20px] scroll-mt-20 '>

        <motion.h4 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-Arvo text-darkText dark:text-lightText'>Connect with Me</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1 , y:0}}
        transition={{duration: 0.5, delay:0.5}}
        className='text-center text-5xl font-Arvo text-darkText dark:text-lightText'>Get in Touch</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb- font-Arvo text-darkText dark:text-lightText'>
          I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below to get in touch.
        </motion.p>

        <motion.form 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay:0.9}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>

          <div className='grid grid-cols-auto gap-6 mt-7 mb-8'>
            <motion.input 
            initial={{opacity: 0, x:50}}
            whileInView={{opacity: 1 , x:0}}
            transition={{duration: 0.6, delay:1.2}}
            type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-darkPartial rounded-md bg-[#EDE9FE] dark:border-lightPartial dark:bg-[#4A3C6A] dark:text-lightText' name='name'/>
            <motion.input 
            initial={{opacity: 0, x:-50}}
            whileInView={{opacity: 1 , x:0}}
            transition={{duration: 0.6, delay:1.1}}
            type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-darkPartial rounded-md bg-[#EDE9FE] dark:border-lightPartial dark:bg-[#4A3C6A] dark:text-lightText' name='email'/>
          </div>

          <motion.textarea 
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1 , y:0}}
          transition={{duration: 0.6, delay:1.3}}
          rows='6' placeholder='Enter Your Message' required className='w-full p-4 outline-none border-[0.5px] border-darkPartial rounded-md bg-[#EDE9FE] mb-[10px] dark:border-lightPartial dark:bg-[#4A3C6A] dark:text-lightText' name='message'></motion.textarea>

          <motion.button 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
          type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-darkPartial text-lightText rounded-full mx-auto hover:bg-darkMain duration-700 dark:bg-lightPartial dark:text-darkText dark:hover:bg-lightMain'>Submit Now
            <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt='' className='w-4' />
          </motion.button>

          <p className='mt-2'>{result}</p>

        </motion.form>

    </motion.div>
  )
}

export default Contact

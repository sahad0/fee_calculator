import { useState, useEffect, FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface AppProps {
    text:string
}
export const variantsTypewriter = {
  initial: { opacity: 0 ,y:0 },
  animate: { opacity: 1 ,y:0 },
};



const Typewriter:FC<AppProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [visible,setVisible] = useState<boolean>(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) clearInterval(intervalId);
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);



  return (
    <AnimatePresence>
        {
           visible && ( 
            <motion.span className='text-[30px]' style={{fontFamily:"'Barlow', sans-serif"}}  variants={variantsTypewriter}  >
            {displayText}
            </motion.span>
           )
        }
    </AnimatePresence>
  );
};

export default Typewriter;
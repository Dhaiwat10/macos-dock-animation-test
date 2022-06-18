import { Box, Image, chakra, VStack, Text } from '@chakra-ui/react';
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';
import { confetti } from '../confetti';
import dot from '../dot.png';
import anchor from '../anchor.png';

interface IItemProps {
  imgSrc: string;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  index: number;
}

export const Item: FC<IItemProps> = ({
  imgSrc,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const animRef = useRef(null);

  const isActive = index === activeIndex;

  useEffect(() => {
    let interval;
    if (animRef.current) {
      console.log({ animRef });
      animRef.current.addEventListener('mouseover', () => {
        interval = setInterval(() => {
          confetti(animRef.current, {
            image: anchor,
            width: `${Math.floor(Math.random() * 25) + 20}px`,
            height: `${Math.floor(Math.random() * 25) + 20}px`,
            elementCount: 7,
            duration: 3000,
            angle: 90,
            spread: 360,
            startVelocity: 20,
            stagger: 3,
            perspective: '500px',
            dragFriction: 0.12,
          });
        }, 160);
      });
      animRef.current.addEventListener('mouseout', () => {
        clearInterval(interval);
      });
    }
    return () => clearInterval(interval);
  }, [animRef]);

  return (
    <VStack spacing='2'>
      <Image
        ref={animRef}
        onClick={() => setActiveIndex(index)}
        as={motion.img}
        borderWidth='0.7px'
        borderColor='grey'
        cursor='pointer'
        src={imgSrc}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95 }}
        width='100px'
        draggable={false}
        dropShadow='lg'
      />
      <AnimatePresence>
        {isActive && <Image src={dot} height='8px' />}{' '}
      </AnimatePresence>
    </VStack>
  );
};

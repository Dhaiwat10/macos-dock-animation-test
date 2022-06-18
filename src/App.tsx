import { useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Item } from './components/Item';
import ankrBlack from './ankr_black.png';
import ankrWhite from './ankr_white.png';
import ankrBlue from './ankr_blue.png';

const items = [
  {
    src: ankrBlack,
    index: 0,
  },
  {
    src: ankrWhite,
    index: 1,
  },
  {
    src: ankrBlue,
    index: 2,
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      width='100vw'
      minH='100vh'
      backgroundColor='rgb(26, 32, 44)'
      color='white'
      paddingY='24'
    >
      <HStack
        backgroundColor='rgba(112, 128, 144, 0.4)'
        backdropFilter='blur(10px)'
        width='fit-content'
        paddingX='12'
        paddingY='4'
        rounded='3xl'
        gap='6'
        marginX='auto'
        borderWidth='1px'
        borderColor='grey'
      >
        {items.map((item) => {
          return (
            <Item
              key={item.index}
              imgSrc={item.src}
              index={item.index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </HStack>
    </Box>
  );
}

export default App;

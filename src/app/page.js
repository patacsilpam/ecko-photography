'use client'
import { Box, Container, DecorativeBox } from '@radix-ui/themes';
import Image from 'next/image';
import ImageBanner from './components/banner.png'
export default function Page() {
  return (
    <Box style={{backgroundImage: `url(${ImageBanner.src})`,width: '100%',height: '100vh'}} className='h-screen bg-cover'>
    <Container size="1">
      sfdg
    </Container>
  </Box>
       
  );
}
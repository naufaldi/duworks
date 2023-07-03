import { Box, Container, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'

import CurveRed from '~/components/icons/home/CurveRed'
import Circle from '~/components/pattern/about/circle'

const About = () => {
  return (
    <Box as="section" id="about" w="full">
      <Container
        maxW="1232px"
        w="full"
        pt={{ base: '50px', sm: '80px', lg: '132px' }}
        pb={{ base: '50px', sm: '50px', lg: '100px' }}
        position={'relative'}
      >
        <Circle
          boxSize={{ base: '369px', sm: '635px' }}
          position={'absolute'}
          top={{ base: 'auto', sm: '152px' }}
          left="50%"
          bottom={{ base: '60px', sm: 'auto' }}
          transform={' translateX(-50%)'}
        />
        <Grid
          templateColumns={{ base: 'repeat(6m1fr)', sm: 'repeat(12,1fr)' }}
          columnGap="16px"
          position={'relative'}
          zIndex={'2'}
        >
          <GridItem colSpan={{ base: 4, sm: 2 }} colStart={{ base: 1, sm: 6 }} mb="1">
            <Heading
              as="h6"
              fontSize="16px"
              color="brand.primary"
              fontWeight="400"
              textAlign={'center'}
            >
              ABOUT US
            </Heading>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 12 }} mb="24px">
            <Heading
              as="h3"
              fontSize="40px"
              fontWeight="400"
              lineHeight="56px"
              color="brand.secondary"
            >
              We are Malang-based UX design agency, we specialize in creating user-centered designs
              that are{' '}
              <Box as="span" color="brand.primary">
                both functional and visually appealing.
              </Box>
            </Heading>
          </GridItem>
          <GridItem
            position="relative"
            colSpan={{ base: 6, sm: 11 }}
            colEnd={{ base: 7, sm: 13 }}
            h={{ base: '200px', sm: '300px', lg: '475px' }}
          >
            <CurveRed
              position="absolute"
              top="-8px"
              left={{ base: '-10px', sm: '-50px' }}
              width={{ base: '39px', sm: '101px' }}
              height={{ base: '48px', sm: '124px' }}
              zIndex="2"
            />
            <Image
              src="/images/home/home-about.png"
              alt="About Duworks"
              w="full"
              h={{ base: '195px', sm: 'auto', lg: '475px' }}
              position="absolute"
              right="0"
              bottom="0"
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default About

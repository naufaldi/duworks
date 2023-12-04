import { Box, Container, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import CurveRed from '~/components/icons/home/CurveRed'
import Circle from '~/components/pattern/about/circle'
import { useStaggerAnimation } from '~/constant/useStaggerAnimation'

const About = () => {
  const { parentVariant, childVariant } = useStaggerAnimation()

  const MotionBox = motion(Box)
  const MotionHeading = motion(Heading)
  const MotionGrid = motion(Grid)
  const MotionGridItem = motion(GridItem)
  return (
    <MotionBox as="section" id="about" w="full">
      <Container
        maxW="1232px"
        w="full"
        pt={{ base: '50px', sm: '80px', lg: '132px' }}
        pb={{ base: '50px', sm: '50px', lg: '100px' }}
        position="relative"
      >
        <Circle
          boxSize={{ base: '369px', sm: '635px' }}
          position="absolute"
          top={{ base: 'auto', sm: '152px' }}
          left="50%"
          bottom={{ base: '60px', sm: 'auto' }}
          transform=" translateX(-50%)"
        />
        <MotionGrid
          templateColumns={{ base: 'repeat(6m1fr)', sm: 'repeat(12,1fr)' }}
          columnGap="16px"
          position="relative"
          zIndex="2"
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <GridItem colSpan={{ base: 4, sm: 2 }} colStart={{ base: 1, sm: 6 }} mb="1">
            <MotionHeading
              as="h6"
              fontSize="16px"
              color="brand.primary"
              fontWeight="400"
              textAlign="center"
              variants={childVariant}
            >
              ABOUT US
            </MotionHeading>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 12 }} mb="24px">
            <MotionHeading
              as="h3"
              fontSize="40px"
              fontWeight="400"
              lineHeight="56px"
              color="brand.secondary"
              variants={childVariant}
            >
              We are Malang-based UX design agency, we specialize in creating user-centered designs
              that are{' '}
              <Box as="span" color="brand.primary">
                both functional and visually appealing.
              </Box>
            </MotionHeading>
          </GridItem>
          <MotionGridItem
            position="relative"
            colSpan={{ base: 6, sm: 11 }}
            colEnd={{ base: 7, sm: 13 }}
            h={{ base: '200px', sm: '300px', lg: '475px' }}
            variants={childVariant}
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
          </MotionGridItem>
        </MotionGrid>
      </Container>
    </MotionBox>
  )
}

export default About

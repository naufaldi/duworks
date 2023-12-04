import { Box, Button, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { useNavigate } from '@remix-run/react'
import { motion } from 'framer-motion'

import ArrowRight from '~/components/icons/arrowRight'
import CurveRed from '~/components/icons/home/CurveRed'
import CircleLeft from '~/components/pattern/hero/circleLeft'
import CircleRight from '~/components/pattern/hero/circleRight'
import { useAnimations } from '~/constant/useAnimation'
import { useStaggerAnimation } from '~/constant/useStaggerAnimation'

const Hero = () => {
  const navigate = useNavigate()
  const MotionBox = motion(Box)
  const MotionHeading = motion(Heading)
  const MotionButton = motion(Button)
  const MotionText = motion(Text)
  const MotionGrid = motion(Grid)
  const MotionGridItem = motion(GridItem)
  const { parentVariant } = useStaggerAnimation()
  const { fadeIn, clipPathCircle } = useAnimations()
  return (
    <MotionBox as="section" id="hero" w="full" mt={{ md: '50px', lg: '160px' }}>
      <Container
        maxW="1232px"
        w="full"
        pt="101px"
        pb={{ base: '56px', sm: '108px' }}
        position="relative"
      >
        <CircleLeft
          boxSize={{ base: '369px', sm: '635px' }}
          position="absolute"
          top={{ base: '0px', sm: '-140px', lg: '-156px' }}
          left={{ base: '-120px', sm: '-210px', lg: '-160px' }}
        />
        <CircleRight
          boxSize={{ base: '369px', sm: '635px' }}
          position="absolute"
          top={{ base: 'unset', lg: '-26px' }}
          bottom={{ base: '-80px', sm: '-100px', lg: 'unset' }}
          right={{ base: '-100px', sm: '-160px' }}
        />
        <MotionGrid
          templateColumns={{ base: 'repeat(6,1fr)', sm: 'repeat(12,1fr)' }}
          columnGap="16px"
          position="relative"
          zIndex="2"
          variants={parentVariant}
          initial="hidden"
          animate="visible"
        >
          <GridItem
            colSpan={{ base: 6, sm: 12, lg: 6 }}
            display="flex"
            flexDir="column"
            alignItems="flex-start"
            justifyContent={{ sm: 'center', xl: 'flex-start' }}
          >
            <MotionHeading
              as="h2"
              fontSize={{ base: '40px', sm: '42px', xl: '48px' }}
              fontWeight="500"
              mb="1"
              color="brand.secondary"
              lineHeight="56px"
              maxW="519px"
              w="full"
              variants={fadeIn}
            >
              Crafting seamless{' '}
              <Box as="span" color="brand.primary">
                user experiences
              </Box>{' '}
              that drive results
            </MotionHeading>
            <MotionText
              fontSize={{ base: '14px', sm: '16px' }}
              color="#7884A0"
              mb="32px"
              lineHeight="24px"
              maxW="436px"
              w="full"
              variants={fadeIn}
            >
              We're a User Experience consultant and agency that provides a range of services to
              create intuitive, engaging, and effective user experiences for businesses.
            </MotionText>
            <MotionButton
              variants={fadeIn}
              onClick={() => navigate('/#portfolio')}
              maxW="162px"
              w="full"
              bg="white"
            >
              Our Works
              <ArrowRight boxSize="24px" ml="8px" />
            </MotionButton>
          </GridItem>
          <MotionGridItem
            colSpan={{ base: 6, sm: 11, lg: 6 }}
            colEnd={{ base: 7, sm: 12, lg: 13 }}
            colStart={{ base: 1, sm: 2, md: 1, lg: 7 }}
            position="relative"
            h={{ base: '236px', sm: '412px' }}
            display="flex"
            alignItems={{ sm: 'center', xl: 'flex-start' }}
            justifyContent="center"
            gap="16px"
            mt={{ base: '48px', sm: '12px', lg: '0' }}
            variants={clipPathCircle}
            initial="hidden"
            animate="visible"
          >
            <Box overflow="hidden">
              <Image
                src="/images/home/hero-left.png"
                width="100%"
                height="auto"
                position="relative"
                top="0"
                left="0"
                alt="Duworks"
              />
            </Box>
            <CurveRed
              position="absolute"
              zIndex="2"
              inset="0"
              margin="auto"
              w={{ base: '71px', sm: '101px' }}
              h={{ base: '60px', sm: '124px' }}
            />
            <Box overflow="hidden" pt={{ base: '14px', sm: '28px' }}>
              <Image
                src="/images/home/hero-right.png"
                mt={{ base: '14px', sm: '28px' }}
                width="100%"
                height="auto"
                position="relative"
                bottom="0"
                right="0"
                alt="Duworks"
              />
            </Box>
          </MotionGridItem>
        </MotionGrid>
      </Container>
    </MotionBox>
  )
}

export default Hero

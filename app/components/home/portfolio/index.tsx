import { Box, Container, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { useAnimations } from '~/hooks/useAnimation'
import { useStaggerAnimation } from '~/hooks/useStaggerAnimation'

const PortfolioList = [
  {
    size: 7,
    image: '/images/home/portfolio-1.png',
    alt: 'Portfolio Duworks',
  },
  {
    size: 5,
    image: '/images/home/portfolio-2.png',
    alt: 'Portfolio Duworks',
  },
  {
    size: 5,
    image: '/images/home/portfolio-3.png',
    alt: 'Portfolio Duworks',
  },
  {
    size: 7,
    image: '/images/home/portfolio-4.png',
    alt: 'Portfolio Duworks',
  },
  {
    size: 8,
    image: '/images/home/portfolio-5.png',
    alt: 'Portfolio Duworks',
  },
  {
    size: 4,
    image: '/images/home/portfolio-6.png',
    alt: 'Portfolio Duworks',
  },
]

const Portfolio = () => {
  const { parentVariant } = useStaggerAnimation()
  const { fadeInUp, scaleUpHover, scaleUp } = useAnimations()

  const MotionBox = motion(Box)
  const MotionHeading = motion(Heading)
  const MotionGridItem = motion(GridItem)
  const MotionImage = motion(Image)
  return (
    <MotionBox
      as="section"
      w="full"
      id="portfolio"
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container
        maxW="1232px"
        w="full"
        pt={{ base: '50px', sm: '60px', lg: '100px' }}
        pb={{ base: '50px', sm: '80px', lg: '123px' }}
      >
        <Grid templateColumns={{ base: 'repeat(6,1fr)', sm: 'repeat(12,1fr)' }} columnGap="16px">
          <GridItem colSpan={{ base: 6, sm: 2 }} colStart={{ base: 1, sm: 6 }} mb="16px">
            <MotionHeading
              variants={fadeInUp}
              as="h6"
              fontSize="16px"
              color="brand.primary"
              fontWeight="400"
            >
              PORTFOLIO
            </MotionHeading>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 12 }} mb="32px">
            <MotionHeading
              variants={fadeInUp}
              as="h2"
              fontSize="40px"
              fontWeight="400"
              color="brand.secondary"
            >
              Check out our portfolio to see examples of{' '}
              <Box as="span" color="brand.primary">
                our successful projects
              </Box>{' '}
              for a range of industries and clients.
            </MotionHeading>
          </GridItem>
          {PortfolioList.map((item, index) => (
            <MotionGridItem
              variants={scaleUp}
              colSpan={{ base: 6, sm: item.size }}
              key={index}
              mb="16px"
              overflow="hidden"
            >
              <MotionImage
                whileHover="hover"
                variants={scaleUpHover}
                src={item.image}
                alt={item.alt}
                w="full"
                h="auto"
              />
            </MotionGridItem>
          ))}
        </Grid>
      </Container>
    </MotionBox>
  )
}

export default Portfolio

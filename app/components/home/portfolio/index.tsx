import { Box, Container, Grid, GridItem, Heading, Image } from '@chakra-ui/react'

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
  return (
    <Box as="section" w="full">
      <Container
        maxW="1232px"
        w="full"
        pt={{ base: '50px', sm: '60px', lg: '100px' }}
        pb={{ base: '50px', sm: '80px', lg: '123px' }}
      >
        <Grid templateColumns={{ base: 'repeat(6,1fr)', sm: "repeat(12,1fr)" }} columnGap="16px">
          <GridItem colSpan={{ base: 6, sm: 2 }} colStart={{ base: 1, sm: 6 }} mb="16px">
            <Heading as="h6" fontSize="16px" color="brand.primary" fontWeight="400">
              PORTFOLIO
            </Heading>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 12 }} mb="32px">
            <Heading as="h2" fontSize="40px" fontWeight="400" color="brand.secondary">
              Check out our portfolio to see examples of{' '}
              <Box as="span" color="brand.primary">
                our successful projects
              </Box>{' '}
              for a range of industries and clients.
            </Heading>
          </GridItem>
          {PortfolioList.map((item, index) => (
            <GridItem colSpan={{ base: 6, sm: item.size }} key={index} mb="16px">
              <Image src={item.image} alt={item.alt} w="full" h="auto" />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Portfolio

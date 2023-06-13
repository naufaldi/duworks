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
    <Box>
      <Container maxW="1232px" w="full" pt="100px" pb="123px">
        <Grid templateColumns={'repeat(12,1fr)'} columnGap={'16px'}>
          <GridItem colSpan={2} colStart={6} mb="16px">
            <Heading as="h6" fontSize={'16px'} color="brand.primary" fontWeight={'400'}>
              PORTFOLIO
            </Heading>
          </GridItem>
          <GridItem colSpan={12} mb="32px">
            <Heading as="h2" fontSize={'40px'} fontWeight={'400'} color="brand.secondary">
              Check out our portfolio to see examples of{' '}
              <Box as="span" color="brand.primary">
                our successful projects
              </Box>{' '}
              for a range of industries and clients.
            </Heading>
          </GridItem>
          {PortfolioList.map((item, index) => (
            <GridItem colSpan={item.size} key={index} mb="16px">
              <Image src={item.image} alt={item.alt} w="full" h="auto" />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Portfolio

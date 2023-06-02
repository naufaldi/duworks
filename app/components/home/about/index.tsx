import { Box, Container, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import CurveRed from '~/components/icons/home/CurveRed'

const About = () => {
  return (
    <Box w="full">
      <Container maxW="1232px" w="full" pt="132px" pb="100px">
        <Grid templateColumns={'repeat(12,1fr)'} columnGap={'16px'}>
          <GridItem colSpan={2} colStart={6} mb="1">
            <Heading as="h6" fontSize={'16px'} color="brand.primary" fontWeight={'400'}>
              ABOUT US
            </Heading>
          </GridItem>
          <GridItem colSpan={12} mb="24px">
            <Heading as="h3" fontSize={'40px'} lineHeight={'56px'} color="brand.secondary">
              We are Malang-based UX design agency, we specialize in creating user-centered designs
              that are{' '}
              <Box as="span" color="brand.primary">
                both functional and visually appealing.
              </Box>
            </Heading>
          </GridItem>
          <GridItem position={'relative'} colSpan={11} colEnd={13} h="475px">
            <CurveRed
              position={'absolute'}
              top="-8px"
              left="-50px"
              width={'101px'}
              height={'124px'}
              zIndex={'2'}
            />
            <Image
              src="/images/home/home-about.png"
              alt="About Duworks"
              w="full"
              h="475px"
              position={'absolute'}
              right={'0'}
              bottom={'0'}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default About

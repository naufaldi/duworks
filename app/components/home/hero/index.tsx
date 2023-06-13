import { Box, Button, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

import ArrowRight from '~/components/icons/arrowRight'
import CurveRed from '~/components/icons/home/CurveRed'
// import getImage from '~/utils/getImage'

const Hero = () => {
  // const { css, img } = await getImage('/images/home/hero-left.png')
  return (
    <Box w="full" mt="80px">
      <Container maxW="1232px" w="full" pt="101px" pb="108px">
        <Grid templateColumns={'repeat(12,1fr)'} columnGap={'16px'}>
          <GridItem
            colSpan={{ sm: 12, lg: 5 }}
            display={'flex'}
            flexDir={'column'}
            alignItems={'flex-start'}
            justifyContent={{ sm: 'center', xl: 'flex-start' }}
          >
            <Heading
              as="h2"
              fontSize={{ sm: '42px', xl: '48px' }}
              fontWeight="500"
              mb="1"
              color="brand.secondary"
              lineHeight={'56px'}
            >
              Crafting seamless user experiences that drive results
            </Heading>
            <Text fontSize={'16px'} color="#7884A0" mb="32px" lineHeight={'24px'}>
              We're a User Experience consultant and agency that provides a range of services to
              create intuitive, engaging, and effective user experiences for businesses.
            </Text>
            <Button maxW="162px" w="full">
              Our Works
              <ArrowRight boxSize={'24px'} ml="8px" />
            </Button>
          </GridItem>
          <GridItem
            colSpan={6}
            colEnd={13}
            position={'relative'}
            h="412px"
            display={'flex'}
            alignItems={{ sm: 'center', xl: 'flex-start' }}
            justifyContent={'center'}
            gap="16px"
          >
            <Box>
              <Image
                src="/images/home/hero-left.png"
                width={'100%'}
                height="auto"
                position={'relative'}
                top="0"
                left="0"
                alt="Duworks"
              />
            </Box>
            <CurveRed
              position={'absolute'}
              zIndex={'2'}
              inset={'0'}
              margin="auto"
              w="101px"
              h="124px"
            />
            <Box pt="28px">
              <Image
                src="/images/home/hero-right.png"
                mt="28px"
                width={'100%'}
                height="auto"
                position={'relative'}
                bottom="0"
                right="0"
                alt="Duworks"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Circle from '~/components/pattern/service/circle'
import { ServiceList } from '~/constant/serviceList'
import { useAnimations } from '~/hooks/useAnimation'
import { useStaggerAnimation } from '~/hooks/useStaggerAnimation'
const Services = () => {
  const { parentVariant } = useStaggerAnimation()
  const { fadeInRight, fadeInUp } = useAnimations()

  const MotionBox = motion(Box)
  const MotionHeading = motion(Heading)

  const MotionGridItem = motion(GridItem)
  return (
    <MotionBox
      as="section"
      id="services"
      w="full"
      variants={parentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Container
        maxW="1232px"
        w="full"
        py={{ base: '50px', sm: '60px', lg: '100px' }}
        position="relative"
      >
        <Circle
          boxSize={{ base: '369px', sm: '635px' }}
          position="absolute"
          top={{ base: '346px', sm: '100px', lg: '-170px' }}
          right={{ base: '50%', lg: '-230px' }}
          transform={{ base: 'translateX(50%)', lg: 'none' }}
        />
        <Grid
          templateColumns={{ base: 'repeat(6,1fr)', sm: 'repeat(12,1fr)' }}
          columnGap="16px"
          position="relative"
          zIndex="2"
        >
          <GridItem colSpan={{ base: 6, sm: 1 }} mb="14px">
            <MotionHeading
              variants={fadeInUp}
              as="h6"
              fontSize="16px"
              color="brand.primary"
              fontWeight="400"
            >
              Services
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
              We offer a wide range of services to help businesses improve their digital user
              experience{' '}
              <Box as="span" color="brand.primary">
                with our experienced designers and researchers teams.
              </Box>
            </MotionHeading>
          </GridItem>
          {ServiceList.map((item, index) => (
            <MotionGridItem
              variants={fadeInRight}
              key={index}
              colSpan={{ base: 6, sm: 6, lg: 4 }}
              bg="white"
              position="relative"
              display="flex"
              flexDir="column"
              pt={{ base: '56px', sm: '76px' }}
              pb={{ base: '24px', sm: '72px' }}
              pl={{ base: '24px', sm: '56px' }}
              pr={{ base: '36px', sm: '56px' }}
              rounded="lg"
              _hover={{
                boxShadow: 'lg',
                cursor: 'pointer',
              }}
              transition="ease-in-out"
              transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
              transitionDuration="150ms"
              mb={{ base: '16px', sm: '0' }}
            >
              {/* <OvalRed position="absolute" top="0" right="0" zIndex="2" w="101px" h="124px" /> */}
              <Image
                src="/images/other/ornament.png"
                position="absolute"
                top="0"
                right="0"
                zIndex="2"
                w="101px"
                h="124px"
              />
              <Heading as="h4" mb="28px" fontSize="24px" fontWeight="400" color="brand.primary">
                {item.title}
              </Heading>
              <Text mb="28px" color="#7884A0" fontSize="16px">
                {item.description}
              </Text>
              <UnorderedList color="brand.secondary" fontSize="16px" spacing="16px">
                {item.list?.map((listItem, index) => (
                  <ListItem key={index}>{listItem}</ListItem>
                ))}
              </UnorderedList>
            </MotionGridItem>
          ))}
        </Grid>
      </Container>
    </MotionBox>
  )
}

export default Services

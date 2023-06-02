import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'
import OvalRed from '~/components/icons/home/OvalRed'
import { ServiceList } from '~/constant/serviceList'

const Services = () => {
  return (
    <Box w="full">
      <Container maxW="1232px" w="full" py="100px">
        <Grid templateColumns={'repeat(12,1fr)'} columnGap={'16px'}>
          <GridItem colSpan={1} mb="14px">
            <Heading as="h6" fontSize={'16px'} color="brand.primary" fontWeight={'400'}>
              Services
            </Heading>
          </GridItem>
          <GridItem colSpan={12} mb="32px">
            <Heading as="h2" fontSize={'40px'} fontWeight={'400'} color="brand.secondary">
              We offer a wide range of services to help businesses improve their digital user
              experience{' '}
              <Box as="span" color="brand.primary">
                with our experienced designers and researchers teams.
              </Box>
            </Heading>
          </GridItem>
          {ServiceList.map((item, index) => (
            <GridItem
              key={index}
              colSpan={4}
              bg="white"
              position={'relative'}
              display={'flex'}
              flexDir={'column'}
              pt="76px"
              pb="72px"
              px="56px"
              rounded={'lg'}
              _hover={{
                boxShadow: 'lg',
                cursor: 'pointer',
              }}
              transition={'ease-in-out'}
              transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
              transitionDuration={'150ms'}
            >
              <OvalRed position={'absolute'} top="0" right={'0'} zIndex={'2'} w="101px" h="124px" />
              <Heading as="h4" mb="28px" fontSize={'24px'} fontWeight={'400'} color="brand.primary">
                {item.title}
              </Heading>
              <Text mb="28px" color="#7884A0" fontSize={'16px'}>
                {item.description}
              </Text>
              <UnorderedList color="brand.secondary" fontSize={'16px'} spacing={'16px'}>
                {item.list?.map((listItem, index) => (
                  <ListItem key={index}>{listItem}</ListItem>
                ))}
              </UnorderedList>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services
import { Box, Button, Container, Flex, Heading,HStack } from '@chakra-ui/react'
import React from 'react'

import ArrowRight from '../icons/arrowRight'

const Footer = () => {
  return (
    <Box w="full" bg="brand.primary">
      <Container maxW={'1232px'} w="full" pt="50px">
        <Flex flexDir="column">
          <Heading as="h4" fontSize={'40px'} fontWeight={'400'} color="#000000">
            Partner with us to create user experiences that will exceed your expectations and{' '}
            <Box as="span" color="#ffffff">
              help grow your business.
            </Box>
          </Heading>
          <Flex w="full" justifyContent={'space-between'}>
            <Button variant={'outline'} maxW="162px" w="full" bg="white">
              Let’s Talks
              <ArrowRight boxSize={'24px'} ml="8px" />
            </Button>
            <HStack></HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer

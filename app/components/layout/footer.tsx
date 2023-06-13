import { Box, Button, Container, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'

import ArrowRight from '../icons/arrowRight'
import LinkedIn from '../icons/social/linkedIn'
import Twitter from '../icons/social/twitter'
import Dribble from '../icons/social/dribble'
import Instagram from '../icons/social/instagram'

const Footer = () => {
  return (
    <Box w="full" bg="#E5212E">
      <Container maxW={'1232px'} w="full" pt="50px" pb="21px">
        <Flex flexDir="column">
          <Heading as="h4" fontSize={'40px'} fontWeight={'400'} color="#000000" mb="40px">
            Partner with us to create user experiences that will exceed your expectations and{' '}
            <Box as="span" color="#ffffff">
              help grow your business.
            </Box>
          </Heading>
          <Flex w="full" justifyContent={'space-between'}>
            <Button maxW="162px" w="full" bg="white">
              Let’s Talks
              <ArrowRight boxSize={'24px'} ml="8px" />
            </Button>
            <HStack gap={'32px'}>
              <Link href="/">
                <LinkedIn boxSize={'24px'} />
              </Link>
              <Link href="/">
                <Twitter boxSize={'24px'} />
              </Link>
              <Link href="/">
                <Dribble boxSize={'24px'} />
              </Link>
              <Link href="/">
                <Instagram boxSize={'24px'} />
              </Link>
            </HStack>
          </Flex>
          <Flex justifyContent={'space-between'} alignItems={'center'} mt=" 184px">
            <Flex flexDir={'column'}>
              <Text fontSize={'16px'} color="#ffffff">
                Made with love from our beloved city
              </Text>
              <Text fontSize={'16px'} color="brand.secondary" textDecoration={'underline'}>
                Malang, Indonesia
              </Text>
            </Flex>
            <Text fontSize={'16px'} color="#ffffff">
              helo@dedux.com
            </Text>
            <Text fontSize={'16px'} color="#ffffff">
              Alright Reserved ⓒ 2023
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer

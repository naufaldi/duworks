import { Box, Button, Container, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'

import ArrowRight from '../icons/arrowRight'
import Dribble from '../icons/social/dribble'
import Instagram from '../icons/social/instagram'
import LinkedIn from '../icons/social/linkedIn'
import Twitter from '../icons/social/twitter'

const Footer = () => {
  return (
    <Box as="footer" w="full" bg="#E5212E">
      <Container maxW="1232px" w="full" pt="50px" pb="21px">
        <Flex flexDir="column">
          <Heading as="h4" fontSize="40px" fontWeight="400" color="#000000" mb="40px">
            Partner with us to create user experiences that will exceed your expectations and{' '}
            <Box as="span" color="#ffffff">
              help grow your business.
            </Box>
          </Heading>
          <Flex w="full" flexDir={{ base: 'column', sm: 'row' }} justifyContent="space-between">
            <Button
              onClick={(e) => {
                window.location.href = 'mailto:hello@duringworks.com'
                e.preventDefault()
              }}
              variant="white"
              maxW="162px"
              w="full"
              mb={{ base: '64px', sm: '0px' }}
            >
              Let’s Talks
              <ArrowRight boxSize="24px" ml="8px" />
            </Button>
            <HStack gap="32px" mx={{ base: 'auto', sm: '0' }} mb={{ base: '24px', sm: '0' }}>
              <Link href="/" isExternal>
                <LinkedIn boxSize="24px" />
              </Link>
              <Link href="https://twitter.com/duringworks" isExternal>
                <Twitter boxSize="24px" />
              </Link>
              <Link href="https://dribbble.com/shots/21647852-Duringworks-landing-page" isExternal>
                <Dribble boxSize="24px" />
              </Link>
              <Link href="https://www.instagram.com/atduringworks/" isExternal>
                <Instagram boxSize="24px" />
              </Link>
            </HStack>
            <Link
              href="#"
              onClick={(e) => {
                window.location.href = 'mailto:hello@duringworks.com'
                e.preventDefault()
              }}
              display={{ base: 'block', sm: 'none' }}
              mx="auto"
              fontSize="16px"
              color="#ffffff"
            >
              helo@dedux.com
            </Link>
          </Flex>
          <Flex
            justifyContent="space-between"
            flexDir={{ base: 'column', sm: 'row' }}
            alignItems="center"
            mt={{ base: '86px', sm: '184px' }}
          >
            <Flex
              flexDir="column"
              textAlign={{ base: 'center', sm: 'left' }}
              mb={{ base: '48px', sm: '0' }}
            >
              <Text fontSize="16px" color="#ffffff">
                Made with love from our beloved city
              </Text>
              <Text fontSize="16px" color="brand.secondary" textDecoration="underline">
                Malang, Indonesia
              </Text>
            </Flex>
            <Link
              href="#"
              onClick={(e) => {
                window.location.href = 'mailto:hello@duringworks.com'
                e.preventDefault()
              }}
              fontSize="16px"
              color="#ffffff"
              display={{ base: 'none', sm: 'block' }}
            >
              helo@dedux.com
            </Link>
            <Text fontSize="16px" color="#ffffff">
              Alright Reserved ⓒ 2023
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer

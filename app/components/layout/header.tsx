import { Box, Button, Container, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from '@remix-run/react'

import Menu from '../icons/home/Menu'
import Logo from '../icons/logo'
import MessagesIcon from '../icons/messages'

function Header() {
  return (
    <Box as="header" w="full" py="8px" position="fixed" top="0" right="0" left="0" bg="white" zIndex="3">
      <Container maxW="1230px" mx="auto" w="full">
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Logo w="122px" h="64px" />
          <HStack spacing="56px" display={{ base: 'none', sm: 'flex' }}>
            <Link to="/">
              <ChakraLink p="8px">About</ChakraLink>
            </Link>
            <Link to="/">
              <ChakraLink p="8px">Services</ChakraLink>
            </Link>
            <Link to="/">
              <ChakraLink p="8px">Portfolio</ChakraLink>
            </Link>
          </HStack>
          <Button
            display={{ base: 'none', sm: 'flex' }}
            py="12px"
            maxW="192px"
            w="full"
            color="brand.secondary"
            fontWeight="500"
            fontSize="base"
            bg="white"
            border="1px solid #A5B3CF"
          >
            Contact Us
            <MessagesIcon ml="8px" boxSize="24px" />
          </Button>
          <Button width={"32px"} height={'32px'} border="0">
            <Menu boxSize="32px" />
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

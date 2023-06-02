import {
  Box,
  Container,
  Flex,
  Link as ChakraLink,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../icons/logo';
import { Link } from '@remix-run/react';
import MessagesIcon from '../icons/messages';

function Header() {
  return (
    <Box w="full" py="8px">
      <Container maxW="1230px" mx="auto" w="full">
        <Flex w="full" justifyContent={'space-between'} alignItems={'center'}>
          <Logo w="122px" h="64px" />
          <HStack spacing={'56px'}>
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
            py="12px"
            maxW="192px"
            w="full"
            color="brand.secondary"
            fontWeight={'500'}
            fontSize={'base'}
            display={'flex'}
            bg="white"
            border={'1px solid #A5B3CF'}
          >
            Contact Us
            <MessagesIcon ml="8px" boxSize={'24px'} />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;

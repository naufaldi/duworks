import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  useDisclosure,
  Slide,
} from '@chakra-ui/react'
import { Link as RemixLink } from '@remix-run/react'

import Menu from '../icons/home/Menu'
import Logo from '../icons/logo'
import MessagesIcon from '../icons/messages'
import MenuClose from '../icons/home/MenuClose'
import { useEffect, useState } from 'react'

interface listMenuMobileProps {
  link: string
  caption: string
}

function Header() {
  const { isOpen, onToggle } = useDisclosure()
  const [scrollPosition, setScrollPosition] = useState(0)

  const listMenuMobile: listMenuMobileProps[] = [
    {
      link: '#about',
      caption: 'About',
    },
    {
      link: '#services',
      caption: 'Services',
    },
    {
      link: '#portfolio',
      caption: 'Portfolio',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY || document.documentElement.scrollTop
      setScrollPosition(currentPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      as="header"
      w="full"
      py="8px"
      position="fixed"
      top="0"
      right="0"
      left="0"
      bg="white"
      zIndex="3"
      boxShadow={scrollPosition > 10 ? 'lg' : 'none'}
    >
      <Container maxW="1230px" mx="auto" w="full">
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <ChakraLink as={RemixLink} to="/">
            <Logo w="122px" h="64px" zIndex={'15'} />
          </ChakraLink>
          <HStack spacing="56px" display={{ base: 'none', sm: 'flex' }}>
            <ChakraLink as={RemixLink} to="/" p="8px">
              About
            </ChakraLink>
            <ChakraLink as={RemixLink} to="/" p="8px">
              Services
            </ChakraLink>
            <ChakraLink as={RemixLink} to="/" p="8px">
              Portfolio
            </ChakraLink>
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
          <Button
            display={{ base: 'flex', sm: 'none' }}
            width={'32px'}
            height={'32px'}
            zIndex={'15'}
            border="0"
            onClick={onToggle}
          >
            {!isOpen ? <Menu boxSize="32px" /> : <MenuClose boxSize="32px" />}
          </Button>
        </Flex>
      </Container>
      {/* Menu Dropdown Mobile */}
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        <Box mt="80px" bg="white" py="32px" px="80px" h="470px">
          <Flex flexDir={'column'} gap="56px" alignItems={'center'}>
            {listMenuMobile.map((item, index) => (
              <ChakraLink
                as={RemixLink}
                key={index}
                textAlign={'center'}
                onClick={onToggle}
                to={item.link}
                py="12px"
                maxW="210px"
                w="full"
              >
                {item.caption}
              </ChakraLink>
            ))}
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
          </Flex>
        </Box>
      </Slide>
    </Box>
  )
}

export default Header

'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box >
      {/* Desktop & Mobile Navbar */}
      <Flex
        bg="transparent"
        mx="auto"
        minH="60px"
        p={{ base: 4, md: 16 }}
        align="center"
        justify="space-between"
        position="absolute" // Keeps navbar atop the hero
        top="0"
        left="0"
        w="100%"
        zIndex="10" 
        
      >
        {/* Logo */}
        <Text as="a" href="/" fontSize="xl" fontWeight="bold">
          ABOUT.ME
        </Text>

        {/* Desktop Links */}
        <Stack
          direction={{base: "column", md: "row"}}
          spacing={6}
          display={{ base: 'none', md: 'flex' }} // Hide on mobile
          align="center"
          color='white'
        >
          <Text as="a" href="/about" _hover={{ textDecoration: 'underline' }}>
            HOBBIES
          </Text>
          <Text as="a" href="/blog" _hover={{ textDecoration: 'underline' }}>
            BLOG
          </Text>
        </Stack>

        {/* Mobile Hamburger Icon */}
        <IconButton
          aria-label="Toggle Navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: 'none' }} // Hide on desktop
          onClick={onToggle}
          variant="ghost"
          color="white"
        />
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg="teal.600"
          color="white"
          p={4}
          display={{ md: 'none' }} // Show only on mobile
          spacing={4}
        >
          <Text as="a" href="/about" _hover={{ textDecoration: 'underline' }}>
            About
          </Text>
          <Text as="a" href="/blog" _hover={{ textDecoration: 'underline' }}>
            Blog
          </Text>
        </Stack>
      </Collapse>
    </Box>
  )
}

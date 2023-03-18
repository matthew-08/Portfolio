import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box, Heading, Text, Flex, Image, Link, HStack, useColorModeValue,
  useMediaQuery,
  Button,
  IconButton,
  CloseButton,
  VStack,
  StackDivider,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import ToggleColorMode from './ToggleColorMode';

export default function Header() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const [menuDisplay, setMenuDisplay] = useState('none');
  return (

    <Flex
      as="nav"
      minWidth="100%"
      minHeight="5rem"
      backgroundColor="main.secondary"
      alignItems="center"
      marginBottom="1rem"
      justifyContent="space-between"
      padding="1rem"
    >
      <Image
        src={logo}
        width="100px"
      />
      {isLargerThan800
        ? (
          <HStack
            as="ul"
            listStyleType="none"
            gap="16px"
            color="white"
            fontSize="1.2rem"
            fontWeight="400"
            className="ul"
            display="flex"
          >
            <li>
              <Link
                className="link"
                textDecoration="none"
                _hover={{ textDecoration: 'none ' }}
                href="github.com"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="link"
                _hover={{ textDecoration: 'none ' }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                _hover={{ textDecoration: 'none ' }}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                _hover={{ textDecoration: 'none ' }}
              >
                Contact
              </Link>
            </li>
          </HStack>
        )
        : (
          <IconButton
            aria-label="hamburger-icon"
            icon={<HamburgerIcon />}
            onClick={() => setMenuDisplay('flex')}
          />
        )}
      <Flex
        display={menuDisplay}
        w={['80vw', '50vw', '40vw']}
        bg="gray.600"
        zIndex="20"
        position="fixed"
        top="0"
        right="0"
        minHeight="100%"
        padding="1rem"
        flexDir="column"
      >
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="center"
          flexDir="row"
          minW="100%"
          borderBottom="4px solid"
          pb="1rem"
          borderColor="white"
          mb="1rem"
        >
          <Heading
            fontSize="1.4rem"
          >
            Matthew Crosby
          </Heading>
          <IconButton
            aria-label="close-button"
            icon={<CloseButton />}
            onClick={() => setMenuDisplay('none')}
          />
        </Flex>
        <VStack
          mb="auto"
          fontSize="1.4rem"
        >
          <Button
            bg="none"
          >
            Projects
          </Button>
          <Button
            bg="none"
          >
            About
          </Button>
          <Button
            bg="none"
          >
            Contact
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
}

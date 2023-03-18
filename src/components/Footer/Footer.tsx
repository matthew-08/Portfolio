import { EmailIcon } from '@chakra-ui/icons';
import {
  Button, Flex, Heading, HStack, Text,
} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <Flex
      as="footer"
      minHeight="20%"
      flexDir="column"
      align="center"
    >
      <Heading
        mb="3rem"
      >
        Contact me:
      </Heading>
      <HStack
        mb="2rem"
      >
        <Button
          leftIcon={<EmailIcon />}
        >
          Email
        </Button>
        <Button
          leftIcon={<Icon icon="ri:github-fill" width="25px" />}
        >
          Github
        </Button>
        <Button
          leftIcon={<Icon icon="ri:linkedin-box-line" width="25px" />}
        >
          LinkedIn
        </Button>
      </HStack>
      <Text
        textAlign="center"
        maxW="45ch"
        mb="2rem"
      >
        Designed & Created by Matthew Crosby, 2023
        <br />
        Built with ChakraUI and Vite

      </Text>
    </Flex>
  );
}

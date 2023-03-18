import React from 'react';
import {
  Flex, Heading, Image, Text, Box,
  useMediaQuery,
} from '@chakra-ui/react';
import Skills from '../Skills/Skills';
import person from '../../assets/person.svg';

export default function AboutSection() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  return (
    <>
      <Heading
      // heading
        m="auto"
        alignSelf="center"
        mb="2rem"
        fontSize="3.5rem"
        position="relative"
        zIndex="1"
        mt="6rem"
      >
        <Box
          width="100%"
          height="10px"
          backgroundColor="purple.600"
          zIndex="-1"
          bottom="40%"
          position="absolute"
        />
        About Me
      </Heading>
      <Flex
        align="center"
        gap="1rem"
        flexDir={isLargerThan900 ? 'row' : 'column'}
        fontSize="1rem"
        mb="4rem"
      >
        <Flex
          align="center"
          flexDirection="column"
        >
          <Image
            src={person}
            width="300px"
            marginBottom="1rem"
          />
          <Text
            fontSize="1.5rem"
            fontWeight="500"
            maxW="46ch"
            fontFamily="Montserrat"
            lineHeight="1.3"
            padding="1rem"
            textAlign="center"
          >
            Fully committed to the philosophy of life-long learning,
            I’m a full stack developer with a deep passion for JavaScript,
            React and all things web development. The unique combination of creativity,
            logic, technology and never running out of new things to discover, drives
            my excitement and passion for web development. When I’m not at my computer I like to
            spend my time reading, keeping fit and playing guitar.
          </Text>
        </Flex>
        <Skills />
      </Flex>
    </>
  );
}

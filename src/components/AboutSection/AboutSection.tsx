import {
    Flex,
    Heading,
    Image,
    Text,
    Box,
    useMediaQuery,
} from '@chakra-ui/react'
import Skills from '../Skills/Skills'
import person from '../../assets/person.svg'

export default function AboutSection() {
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

    return (
        <>
            <Heading
                // heading
                m="auto"
                alignSelf="center"
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
                <Flex align="center" flexDirection="column">
                    <Image src={person} width="300px" marginBottom="1rem" />
                    <Text
                        fontSize="1.5rem"
                        fontWeight="500"
                        maxW="46ch"
                        fontFamily="Montserrat"
                        lineHeight="1.3"
                        padding="1rem"
                        textAlign="left"
                    >
                        I'm a full stack developer with a passion for creative
                        thinking and problem solving. My current weapons of
                        choice are anything and everything JavaScript, including
                        React / TypeScript on the front-end and Node on the
                        backend. When I'm not hunched over in front of my
                        computer I'm likely hunched over my guitar instead!
                    </Text>
                </Flex>
                <Skills />
            </Flex>
        </>
    )
}

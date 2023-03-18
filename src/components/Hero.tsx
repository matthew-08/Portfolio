/* eslint-disable react/no-unescaped-entities */
import {
    Flex,
    Heading,
    Text,
    HStack,
    Button,
    useColorModeValue,
    Image,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { Icon } from '@iconify/react'
import pdf from '../assets/pdf.svg'

const mailto = 'mailto:matthewjcrosby1@gmail.com'

export default function Hero() {
    const bgColor = useColorModeValue('main.primaryLight', 'main.primaryDark')
    const filterForImages = useColorModeValue('', 'brightness(0) invert(1)')

    return (
        <Flex
            as="main"
            backgroundColor={bgColor}
            textAlign="center"
            flexDir="column"
            maxWidth="80%"
            justifyContent="center"
            alignItems="center"
            mt="6rem"
        >
            <Heading
                fontFamily="Alfa Slab One"
                fontSize="5rem"
                fontWeight="light"
                maxWidth="40ch"
                mb="2rem"
            >
                Hello, I'm{' '}
                <Text as="span" color="purple.300">
                    Matt
                </Text>
            </Heading>
            <Text fontSize="1.6rem" mb="2rem" maxW="63ch">
                A jazz guitarist turned full stack web developer!
            </Text>
            <HStack>
                <Button
                    leftIcon={<Image src={pdf} filter={filterForImages} />}
                    backgroundColor="purple.500"
                    variant="solid"
                    fontSize="1.1rem"
                    padding={['0.7rem', '1.5rem']}
                    size="lg"
                    _hover={{ backgroundColor: 'purple.600' }}
                >
                    Resume
                </Button>
                <Button
                    leftIcon={<EmailIcon />}
                    variant="solid"
                    fontSize="1.1rem"
                    padding={['0.7rem', '1.5rem']}
                    size="lg"
                    onClick={(e) => {
                        e.preventDefault()
                        window.location.href = mailto
                    }}
                >
                    Email
                </Button>
                <Button
                    leftIcon={<Icon icon="ri:github-fill" width="25px" />}
                    variant="solid"
                    fontSize="1.1rem"
                    padding={['0.7rem', '1.5rem']}
                    size="lg"
                    as="a"
                    href="https://github.com/matthew-08"
                >
                    Github
                </Button>
            </HStack>
        </Flex>
    )
}

import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Heading,
    Flex,
    Image,
    HStack,
    useMediaQuery,
    Button,
    IconButton,
    CloseButton,
    VStack,
} from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/logo.png'
import '../global.css'

type NavOption = {
    name: 'Projects' | 'Skills' | 'Resume' | 'Contact'
    to: `/#${NavOption['name']}`
}

const navOptions: NavOption[] = [
    {
        name: 'Projects',
        to: '/#Projects',
    },
    {
        name: 'Skills',
        to: '/#Skills',
    },
    {
        name: 'Contact',
        to: '/#Contact',
    },
    {
        name: 'Resume',
        to: '/#Resume',
    },
]

export default function Header() {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const [menuDisplay, setMenuDisplay] = useState('none')
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
            <Image src={logo} width="100px" />
            {isLargerThan800 ? (
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
                    {navOptions.map(({ name, to }) => (
                        <li key={uuid()}>
                            <HashLink smooth to={to}>
                                {name}
                            </HashLink>
                        </li>
                    ))}
                </HStack>
            ) : (
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
                    <Heading fontSize="1.4rem">Matthew Crosby</Heading>
                    <IconButton
                        aria-label="close-button"
                        icon={<CloseButton />}
                        onClick={() => setMenuDisplay('none')}
                    />
                </Flex>
                <VStack mb="auto" fontSize="1.4rem">
                    {navOptions.map(({ name, to }) => (
                        <Button
                            background="none"
                            key={uuid()}
                            onClick={() => setMenuDisplay('none')}
                        >
                            <HashLink smooth to={to}>
                                {name}
                            </HashLink>
                        </Button>
                    ))}
                </VStack>
            </Flex>
        </Flex>
    )
}

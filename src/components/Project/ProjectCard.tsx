import {
    Flex,
    Heading,
    Text,
    Image,
    HStack,
    Button,
    useMediaQuery,
    IconButton,
    Center,
    Container,
    Box,
    VStack,
} from '@chakra-ui/react'
import React from 'react'
import { LinkIcon } from '@chakra-ui/icons'
import { Icon } from '@iconify/react'
import { v4 as uuid } from 'uuid'
import { Project, ProjectTech } from '../../Types/types'
import folder from '../../assets/folder.svg'

export default function ProjectCard({
    links,
    projectDescription,
    projectImg,
    projectName,
    projectSubtitle,
    projectTechUsed,
}: Project) {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
    return (
        <Flex
            maxWidth={!isLargerThan500 ? '300px' : '450px'}
            minWidth={!isLargerThan500 ? '350px' : '500px'}
            flexDir="column"
            minH="400px"
            backgroundColor="main.secondary"
            borderRadius="10px"
            className="card"
        >
            <Center
                as="header"
                background="blackAlpha.400"
                padding="1rem"
                mb="1rem"
            >
                <Image src={folder} maxW="30px" mr="auto" />
                <Heading mr="auto">{projectName}</Heading>
            </Center>
            <Flex padding="1rem" flexDir="column" flexGrow="1">
                <Container minHeight="100px">
                    <Flex
                        align="center"
                        justifyContent="center"
                        gap="0.1rem"
                        flexWrap="wrap"
                        px={!isLargerThan500 ? '2rem' : '4rem'}
                    >
                        {projectTechUsed.map((tech) => {
                            return (
                                <Box
                                    borderRadius="10px"
                                    padding="0.2rem"
                                    fontFamily="Fira Code, monospace"
                                >
                                    {tech.toUpperCase()}
                                </Box>
                            )
                        })}
                    </Flex>
                </Container>
                <Text px="1.2rem">{projectDescription}</Text>
                <HStack mt="auto" ml="auto">
                    <Button
                        as="a"
                        leftIcon={<LinkIcon width="30px" />}
                        variant="solid"
                        backgroundColor="purple.500"
                        border="1px"
                        _hover={{
                            backgroundColor: 'purple.500',
                            borderColor: 'white ',
                        }}
                        borderColor="purple.500"
                        fontSize="1rem"
                        p="1.4rem"
                        pl="1.2rem"
                        justifyContent="space-between"
                        href={links.live}
                    >
                        Live
                    </Button>
                    <Button
                        as="a"
                        border="1px"
                        leftIcon={
                            <Icon icon="material-symbols:code" width="30px" />
                        }
                        fontSize="1rem"
                        p="1.4rem"
                        href={links.github}
                    >
                        Code
                    </Button>
                </HStack>
            </Flex>
        </Flex>
    )
}

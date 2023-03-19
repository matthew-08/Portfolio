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
} from '@chakra-ui/react'
import React from 'react'
import { LinkIcon } from '@chakra-ui/icons'
import { Icon } from '@iconify/react'
import { v4 as uuid } from 'uuid'
import { Project, ProjectTech } from '../../Types/types'
import folder from '../../assets/folder.svg'

const getIcon = (tech: ProjectTech) => {
    switch (tech) {
        case 'express.js':
            return 'logos:express'
        case 'node.js':
            return 'vscode-icons:folder-type-light-node'
        case 'react':
            return 'skill-icons:react-dark'
        case 'postgresql':
            return 'logos:postgresql'
        case 'typescript':
            return 'vscode-icons:file-type-typescript-official'
        case 'firebase':
            return 'vscode-icons:file-type-firebase'
        case 'aws':
            return 'logos:aws'
        case 'redux':
            return 'skill-icons:redux'
        case 'redis':
            return 'redis'
        default:
            return 'unhandled'
    }
}

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
            minWidth="500px"
            maxWidth="300px"
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
                <Heading>{projectName}</Heading>
            </Center>
            <Flex
                align="center"
                justifyContent="center"
                gap="0.2rem"
                flexWrap="wrap"
                px="4rem"
                mb="3rem"
            >
                {projectTechUsed.map((tech) => {
                    return (
                        <Box
                            borderRadius="10px"
                            padding="0.5rem"
                            fontFamily="Fira Code, monospace"
                        >
                            {tech.toUpperCase()}
                        </Box>
                    )
                })}
            </Flex>
            <Text px="4rem">{projectDescription}</Text>
        </Flex>
    )
}

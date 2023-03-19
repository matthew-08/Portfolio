import React from 'react'
import { Box, Flex, Heading, VStack, HStack, Button } from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
import ProjectCard from '../Project/ProjectCard'
import { Project } from '../../Types/types'
import forum from '../../assets/forum.png'
import dashboard from '../../assets/dashboard.png'
import chat3 from '../../assets/chat3.png'

const projects: Project[] = [
    {
        links: {
            live: 'https://noic-matthew-08.vercel.app/',
            github: 'https://github.com/matthew-08/Crypto_Tracker',
        },
        projectName: 'Langooo / ',
        projectImg: chat3,
        projectTechUsed: [
            'postgresql',
            'react',
            'typescript',
            'node.js',
            'redis',
            'redux',
            'aws',
        ],
        projectSubtitle: 'Language Exchange Chat App',
        projectDescription:
            'Langooo is a real-time chat application aimed at language learners',
    },
    {
        projectName: 'Noic /',
        projectSubtitle: 'Crypto Porfolio App',
        projectDescription:
            'A full-stack crypto-currency portfolio and price tracker.',
        projectTechUsed: [
            'typescript',
            'react',
            'postgresql',
            'express.js',
            'node.js',
        ],
        projectImg: dashboard,
        links: {
            live: 'https://noic-matthew-08.vercel.app/',
            github: 'https://github.com/matthew-08/Crypto_Tracker',
        },
    },
    {
        projectName: 'A Forum /',
        projectSubtitle: 'Forum Application',
        projectDescription: 'A full-stack forum application',
        projectTechUsed: ['typescript', 'react', 'firebase'],
        projectImg: forum,
        links: {
            live: '',
            github: '',
        },
    },
    {
        projectName: 'A Forum /',
        projectSubtitle: 'Forum Application',
        projectDescription: 'A full-stack forum application',
        projectTechUsed: ['typescript', 'react', 'firebase'],
        projectImg: forum,
        links: {
            live: '',
            github: '',
        },
    },
]

export default function ProjectSection() {
    return (
        <Flex
            as="section"
            mt="8rem"
            flexDir="column"
            pl={['0rem']}
            padding="1rem"
            id="Projects"
            flexWrap="wrap"
        >
            <Heading m="auto" fontSize="3.5rem" mb="4rem" textAlign="center">
                Feature{' '}
                <Box as="span" color="purple.300">
                    Projects
                </Box>
            </Heading>
            <Flex
                gap="1rem"
                flexWrap="wrap"
                justify="center"
                m="auto"
                align="center"
                px={['0rem', '0rem', '0rem', '5rem', '5rem', '15rem']}
            >
                {projects.map((p) => (
                    <ProjectCard
                        key={uuid()}
                        links={p.links}
                        projectDescription={p.projectDescription}
                        projectImg={p.projectImg}
                        projectName={p.projectName}
                        projectSubtitle={p.projectSubtitle}
                        projectTechUsed={p.projectTechUsed}
                    />
                ))}
            </Flex>
            <Button
                maxW="300px"
                m="auto"
                mt="1rem"
                padding="1.7rem"
                fontSize="1.2rem"
                border="4px solid "
                background="whiteAlpha.200"
                borderColor="purple.400"
            >
                More Projects
            </Button>
        </Flex>
    )
}

import React from 'react'
import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
import ProjectCard from '../Project/ProjectCard'
import { Project } from '../../Types/types'
import forum from '../../assets/forum.png'
import dashboard from '../../assets/dashboard.png'
import chat3 from '../../assets/chat3.png'

const projects: Project[] = [
    {
        projectName: 'A Forum /',
        projectSubtitle: 'Forum Application',
        projectDescription:
            'A forum application built with react on the front-end and Firebase on the backend.  The user is able',
        projectTechUsed: ['typescript', 'react', 'firebase'],
        projectImg: forum,
        links: {
            live: '',
            github: '',
        },
    },
    {
        projectName: 'Noic /',
        projectSubtitle: 'Crypto Porfolio App',
        projectDescription:
            'A full-stack crypto-currency portfolio / tracker built with React / TypeScript on the frontend and Express.js / PostgreSQL on the backend.',
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
        >
            <Heading m="auto" fontSize="3.5rem" mb="4rem">
                My{' '}
                <Box as="span" color="purple.300">
                    Projects
                </Box>
            </Heading>
            <VStack gap="1rem">
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
            </VStack>
        </Flex>
    )
}

import {
    Flex,
    Heading,
    Text,
    Image,
    HStack,
    Button,
    useMediaQuery,
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
            minWidth="60%"
            flexDir={isLargerThan900 ? 'row' : 'column'}
            maxW={isLargerThan900 ? '30%' : '100%'}
            minH="400px"
            padding={['0.5rem']}
            backgroundColor="main.secondary"
            borderRadius="10px"
        >
            <Flex
                justifyContent={isLargerThan900 ? 'center' : ''}
                align={isLargerThan900 ? '' : 'center'}
                flexDir={isLargerThan900 ? 'row' : 'column'}
            >
                {/* <Image
                    src={projectImg}
                    maxWidth={isLargerThan900 ? '50%' : '100%'}
                    mr="auto"
                /> */}
                <Flex
                    pl="1rem"
                    borderRadius="3xl"
                    color="#fff"
                    fontFamily="Open Sans"
                    flexDirection="column"
                    width={isLargerThan900 ? '90%' : '100%'}
                    mt="auto"
                    mb="auto"
                >
                    <HStack>
                        <Image src={folder} w="40px" />
                        <HStack mt="1rem">
                            <Button
                                as="a"
                                leftIcon={<LinkIcon width="30px" />}
                                variant="solid"
                                backgroundColor="purple.500"
                                border="1px"
                                borderColor="purple.500"
                                fontSize="1.5rem"
                                p="2rem"
                                href={links.live}
                            >
                                Live
                            </Button>
                            <Button
                                as="a"
                                border="1px"
                                leftIcon={
                                    <Icon
                                        icon="material-symbols:code"
                                        width="30px"
                                    />
                                }
                                fontSize="1.5rem"
                                p="2rem"
                                href={links.github}
                            >
                                Code
                            </Button>
                        </HStack>
                    </HStack>
                    <Heading fontSize={['1.4rem', '2rem', '2rem', '2.2rem']}>
                        {projectName}
                        <br />
                        <Text
                            fontSize={['1.4rem', '1.6rem', '1.7rem', '1.4rem']}
                        >
                            {projectSubtitle}
                        </Text>
                    </Heading>
                    <Text
                        fontWeight={200}
                        mb="1rem"
                        fontSize={['0.8rem', '1rem', '1.3rem', '1.3rem']}
                    >
                        {projectDescription}
                    </Text>
                    <Flex gap="0.5rem" wrap="wrap" align="center" mt="auto">
                        {projectTechUsed.map((tech) => (
                            <Icon
                                key={uuid()}
                                icon={getIcon(tech)}
                                width={isLargerThan500 ? '70px' : '50px'}
                            />
                        ))}
                    </Flex>

                    <Flex />
                </Flex>
            </Flex>
        </Flex>
    )
}

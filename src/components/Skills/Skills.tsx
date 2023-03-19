import React from 'react'
import { Flex, VStack, Container, Text, useMediaQuery } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import styles from './skills.module.css'

export default function Skills() {
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
    return (
        <Flex
            className={styles.cont}
            gap={isLargerThan900 ? '4rem' : '1rem'}
            align="center"
            id="Skills"
        >
            <VStack>
                <Container>
                    <Icon
                        icon="logos:postgresql"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>Postgres</Text>
                </Container>
                <Container>
                    <Icon
                        icon="vscode-icons:file-type-node2"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>Node.js</Text>
                </Container>
                <Container>
                    <Icon
                        icon="simple-icons:express"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>Express</Text>
                </Container>
            </VStack>
            <VStack>
                <Container>
                    <Icon
                        icon="logos:typescript-icon"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>TypeScript</Text>
                </Container>
                <Container>
                    <Icon
                        icon="logos:javascript"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>JavaScript</Text>
                </Container>
                <Container>
                    <Icon
                        icon="skill-icons:react-dark"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>React</Text>
                </Container>
                <Container>
                    <Icon
                        icon="vscode-icons:file-type-html"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>HTML</Text>
                </Container>
            </VStack>
            <VStack>
                <Container>
                    <Icon
                        icon="mdi:git"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>Git</Text>
                </Container>
                <Container>
                    <Icon
                        icon="skill-icons:css"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>CSS</Text>
                </Container>
                <Container>
                    <Icon
                        icon="logos:webpack"
                        width={isLargerThan900 ? '70px' : '50px'}
                    />
                    <Text>Webpack</Text>
                </Container>
            </VStack>
        </Flex>
    )
}

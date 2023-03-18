import { Flex, Heading, Box, Container } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Skills from './components/Skills/Skills'
import AboutSection from './components/AboutSection/AboutSection'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <Flex
            as="main"
            minWidth="100%"
            minHeight="100vh"
            backgroundColor="main.primaryDark"
            flexDir="column"
            align="center"
        >
            <Header />
            <Hero />
            <AboutSection />
            <ProjectSection />
            <Footer />
        </Flex>
    )
}

export default App

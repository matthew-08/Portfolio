import { Flex } from '@chakra-ui/react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Skills from './components/Skills/Skills'
import AboutSection from './components/AboutSection/AboutSection'
import Footer from './components/Footer/Footer'
import './global.css'
import Home from './components/Home/Home'

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
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Flex>
    )
}

export default App

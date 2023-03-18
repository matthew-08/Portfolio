/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ToggleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={() => toggleColorMode()}>
            {colorMode === 'dark' ? (
                <SunIcon />
            ) : (
                <MoonIcon color="purple.800" />
            )}
        </Button>
    )
}

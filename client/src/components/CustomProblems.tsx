import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const CustomProblems = () => {
  return (
    <>
      <HStack spacing={3} alignItems="center">
              <InputGroup
                display={{
                  base: "none",
                  lg: "block",
                }}
                ml="auto"
              >
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
              </InputGroup>
            </HStack>
    </>
  )
}

export default CustomProblems
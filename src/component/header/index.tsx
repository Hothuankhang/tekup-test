import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Flex flexDirection={"column"} backgroundColor={"black"} minH={"96"} w={"full"}>
        <Text m="auto" color={"white"} fontSize={'4xl'}>Tekup-Test</Text>
    </Flex>
  )
}

export default Header
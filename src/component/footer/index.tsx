import { Box, Divider, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box bgColor={"gray.50"} minH={"80"} alignItems={"center"} px={"72"} pt={"12"}>
        <Box>
            <Flex>
                <Box flex={"2"}>
                    <Image src={"https://tekup.vn/wp-content/uploads/2022/08/logo-tekup-02.png"} alt={"logo"} w={"44"} pb={"4"}/>
                    <Text fontSize={"lg"}>Strategic Products – Transformative Business</Text>
                </Box>
                <VStack flex={"1"} alignItems={"start"}>
                    <Text fontWeight={"bold"} fontSize={"lg"} mb={"4"}>Company</Text>
                    <Text>About Tekup</Text>
                    <Text>Contact</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Term of use</Text>
                </VStack>
                <VStack flex={"1"} alignItems={"start"}>
                    <Text fontWeight={"bold"} fontSize={"lg"} mb={"4"}>Services</Text>
                    <Text>Comprehensive Solution Providing</Text>
                    <Text>Web / App Developing</Text>
                    <Text>IT Workforce Supply (OSDC)</Text>
                    <Text>UX/UI Design</Text>
                </VStack>
            </Flex>
        </Box>
        <Divider my={"4"}/>
        <Box>
            <Flex>
                <Text> © 2022 Tekup JSC</Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default Footer
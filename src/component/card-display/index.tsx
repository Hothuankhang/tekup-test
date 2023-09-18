import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface CardProps {
  title: string,
  image: string
}

function CardDisplay({title,image}: CardProps) {
  return (
    <>
      <Box       
      position={"relative"}
      bgImage={image}
      bgSize="cover"
      w="418px"
      h="418px"
      borderRadius={"5px"}
      cursor={"pointer"}
      boxShadow='lg'
      _hover={{boxShadow:'xl', transform: "translate(0,-3px)"}}
      >
          <Flex  
          w={"90%"}
          position={"absolute"}
          bottom={"20px"}
          left={"5%"}
          fontSize={"lg"}
          p={"4"}
          height={"fit-content"}
          bgColor={"white"}
          justifyContent={"space-between"}
          alignItems={"center"}
          boxShadow='lg'
          borderRadius={"8px"}
          >
            <Text fontWeight={"semibold"} letterSpacing={"-1.75px"}>
              {title}
            </Text>
            <ChevronRightIcon/>
          </Flex>
      </Box>
    </>
  )
}

export default CardDisplay
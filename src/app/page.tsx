'use client'
import { Box, Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { section_tab, tab_content } from '@Constants/index'
import CardDisplay from 'component/card-display'

export default function Home() {
  return (
    <Box alignItems={"center"} pt={"12"} w={"full"} px={{  sm:"10",lg:"20", "2xl": "72" }}>
      <Tabs variant='solid-rounded'>
        <TabList justifyContent={"center"}>
          {section_tab.map((item, index) => {
            return(
              <Tab 
              borderRadius={"8px"} 
              key={index} 
              ml={"2.5"} 
              _selected={{backgroundColor:"#f8d000"}} 
              fontWeight={"bold"}
              fontSize={"lg"}
              >
                {item.title}
              </Tab>
            )
          })}
        </TabList>
        <TabPanels py={"16"}>
          {tab_content.map((item,index)=>{
            return(
              <TabPanel key={index}>
                <Grid templateColumns={{sm:'repeat(1, 1fr)',lg:'repeat(2, 1fr)',"2xl":'repeat(3, 1fr)'}} gap={6}>
                  {
                    item?.card.map((cardItem,cardItemIndex)=>{
                      return(
                        <Box borderRadius={"8px"} key={cardItemIndex}>
                          <CardDisplay title={cardItem.title} image={cardItem.image}/>
                        </Box>
                      )
                    })
                  }
                </Grid>
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

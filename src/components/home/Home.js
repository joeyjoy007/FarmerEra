import React from 'react'
import { Container,Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Buyer from '../buyer/Buyer'
import Seller from '../seller/Seller'


const Home = () => {
  return (
    <Container maxW='xl' centerContent>
    <Box d="flex" justifyContent="center" p={3} bg={"white"} w="100%" m="40px 0 15px 0 " borderRadius="lg" borderWidth="1px">
    <Text fontSize="4xl" fontFamily="Work sans" color="black">Farmer</Text>
    </Box>

    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="black">
    
    <Tabs variant='soft-rounded' >
    <TabList mb="1em">
      <Tab w="50%">Buyer</Tab>
      <Tab w="50%">Seller</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
       <Buyer/>
        </TabPanel>
        <TabPanel>
       <Seller/>
      </TabPanel>
    </TabPanels>
  </Tabs>
    </Box>
   
    </Container>
  )
}

export default Home
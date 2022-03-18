import { Button, FormControl, FormLabel, Input, InputGroup, toast, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import axios from 'axios'
import { FarmerState } from '../context/ContextApis'

const AddProductModal = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productLocation, setProductLocation] = useState("")

    const {setAddProduct} = FarmerState()
    
const toast = useToast()
    const addProduct =async ()=>{

try {
  if(!productName || !productPrice || !productLocation){
    toast({
      title: 'fill fields',
      status: 'warning',
      duration: 5000,
      isClosable: true,
    })
  }
  setLoading(true)
  
  const {data} = await axios.post("http://localhost:8000/createProduct",{
    productName,productPrice,productLocation
  },
  {
    headers:{
      "Content-Type":"application/json"
    }
  }
  )
  setLoading(false)
  setAddProduct(true)
  toast({
    title: 'product added',
    status: 'success',
    duration: 5000,
    isClosable: true,
  })
  console.log(data)
} catch (error) {
  
  toast({
    title: error.message,
    status: 'warning',
    duration: 5000,
    isClosable: true,
  })
}

    }

    const updateProduct = async()=>{

    }

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <>
      <span onClick={onOpen}>{children}</span>
     
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Add Product</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <VStack spacing="5px" color="black">
    

      <FormControl id="pname" isRequired>
        <FormLabel>Product Name</FormLabel>
        <Input
          placeholder="enter product name"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </FormControl>

      <FormControl id="pprice" isRequired>
      <FormLabel>
      Product Price
      </FormLabel>
      <Input
        placeholder="enter price"
        type="text"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
    </FormControl>


      <FormControl id="status" isRequired>
        <FormLabel>
        Product Location
        </FormLabel>
        <Input
          placeholder="enter location"
          type="text"
          value={productLocation}
          onChange={(e) => setProductLocation(e.target.value)}
        />
      </FormControl>




<div style={{}}>
      <Button 
      colorScheme="blue" isLoading={loading} width="100%" style={{marginTop:"15px"}} onClick={addProduct}>Add Product
      </Button>
      <Button 
      colorScheme="blue" isLoading={loading} width="100%" style={{marginTop:"15px"}} onClick={updateProduct}>Update Product
      </Button>
      </div>
      {/*<Button 
      colorScheme="red" width="100%" style={{marginTop:"15px"}} onClick={()=>{
        setEmail("guest@example.com");
        setPassword("123456")
      }}>Get Guest Credentials
    </Button>*/}
    </VStack>
      </ModalBody>

      <ModalFooter>
        
       
      </ModalFooter>
    </ModalContent>
  </Modal>
  </>
  )
}

export default AddProductModal
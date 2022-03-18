import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  toast,
  useToast,
  VStack,
} from "@chakra-ui/react";

import axios from 'axios'

import {useNavigate} from "react-router-dom";

const Seller = () => {

  const navigate = useNavigate()

  const toast = useToast()

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [aadharCard, setAadharCard] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [namee, setNamee] = useState("")
  const [loading, setLoading] = useState(false)


  const handelClick = (e) => {
    e.preventDefault();

    setShow(!show);
  };


  const submitHandler =async (e)=>{
    setLoading(true)
    
    if(!namee || !email || !password || !aadharCard || !mobileNumber){
      toast({
        title: 'fill fields',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    }
    if(password !== confirmPassword){
      toast({
        title: 'password not match',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
      return
    }

    try {
      const config = {
        headers:{
          "Content-Type":"application/json"
        },
      };
      const {data} = await axios.post("http://localhost:8000/createBuyer",{email,password,name:namee,aadharCard,mobileNumber},config)

      toast({
        title: 'success',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      localStorage.setItem("userInfo",JSON.stringify(data));
      setLoading(false);
      navigate('/login')
      
      
    } catch (error) {
      navigate('/login')
      toast({
        title: 'error occured',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    }
      
  }

  return (
    <VStack spacing="5px" color="black">

    <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="enter your name"
          type="text"
          value={namee}
          onChange={(e) => setNamee(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="enter your password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={(e) => handelClick(e)}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmPassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="confirm your password"
            type={show ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={(e) => handelClick(e)}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="aadhar" isRequired>
        <FormLabel>Aadhar Number</FormLabel>
        <Input
          placeholder="enter aadhar number"
          type="text"
          value={aadharCard}
          onChange={(e) => setAadharCard(e.target.value)}
        />
      </FormControl>

      <FormControl id="mobileNumber" isRequired>
        <FormLabel>Mobile Number</FormLabel>
        <Input
          placeholder="number"
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </FormControl>




      <Button 
      colorScheme="blue" isLoading={loading} width="100%" style={{marginTop:"15px"}} onClick={submitHandler}>Register
      </Button>
           {/*<Button 
      colorScheme="red" width="100%" style={{marginTop:"15px"}} onClick={()=>{
        setEmail("guest@example.com");
        setPassword("123456")
      }}>Get Guest Credentials
    </Button>*/}
    </VStack>
  );
};

export default Seller;

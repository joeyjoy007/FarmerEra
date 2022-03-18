import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,

  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';



import { useNavigate,Link } from 'react-router-dom';
export default function SimpleCard() {

  const toast = useToast()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const goToScreen = async()=>{
     
      if(!email || ! password){
        toast({
          title: 'fill fields',
          status: 'warning',
          duration: 5000,
          isClosable: true,
        })
      }

      try {
        const config = {
          headers:{
            "Content-Type":"application/json"
          },
        };
        const {data} = await axios.post("http://localhost:8000/commonLogin",{email,password},config)
  
        toast({
          title: 'login success',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
  
        localStorage.setItem("userInfo",JSON.stringify(data));
        setLoading(false);
        navigate(`/buyPage/1`)
        
        
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
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"  onChange={e=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  onChange={e=>setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
             
              <Link to='#'>Forgot Password ?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={goToScreen}
                _hover={{
                  bg: 'blue.500',
                }}>
                login
              </Button>
            </Stack>
            <Link to="/registerScreen" color={'blue.400'} fontWeight="bolder">Not Login ? click here for Registeration</Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
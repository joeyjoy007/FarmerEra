import {
    Box,
    // chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    // VisuallyHidden,
    // List,
    // ListItem,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect} from 'react';
  // import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  // import { MdLocalShipping } from 'react-icons/md';
  import { useNavigate, useParams} from 'react-router-dom'
  import { useLocation } from 'react-router-dom';

  
  export default function Simple() {
      
    // const id = useParams()

    // const farmerData = [
    //     {id:1,image:"https://media.istockphoto.com/photos/setting-sun-rays-illuminate-a-wheat-field-picture-id181716634",name:"Wheat",price:"200/QTL * 600 QTL",location:"Aasam",endsIn:"Ends 21 Jan 21"},
    //     {id:2,image:"https://3.imimg.com/data3/PE/KO/MY-6724691/soya-bean-500x500.jpg",name:"Soyabean",price:"300/QTL * 700 QTL",location:"Hariyana",endsIn:"Ends 21 Feb 21"},
    //     {id:3,image:"https://m.media-amazon.com/images/I/51xhMsGOthL.jpg",name:"Chana",price:"400/QTL * 800 QTL",location:"Chandigarh",endsIn:"Ends 21 March 21"},
    //     {id:4,image:"https://m.media-amazon.com/images/I/81wkaMZmdbL._SL1500_.jpg",name:"Palak",price:"600/QTL * 900 QTL",location:"Punjab",endsIn:"Ends 21 April 21"},
    //     {id:5,image:"https://5.imimg.com/data5/FN/JF/GLADMIN-51024700/cauliflower-gobi-500gm-500x500.png",name:"Gobi",price:"800/QTL * 800 QTL",location:"Mumbai",endsIn:"Ends 21 May 21"},
        
    // //     ]
    // console.log("Params Id",id)
        

    // const {id} = useParams()
    // console.log(id)
  
      // const singleItem = async()=>{
      //   const {data} = await axios.get(`http://localhost:8000/${id}`)
      //   console.log(data)
      // }

      // useEffect(() => {
      //   singleItem()
        
      // }, [])
      

    const {state} = useLocation()
   
    const {productName,productImage,productPrice,productLocation,productStatus} = state.data

    const navigate = useNavigate()

  


      const goToLogin = ()=>{
        navigate('/login')
      }


 console.log(state)
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={productName}
              src={
                  productImage
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
              fontFamily="Work sans"
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {productName}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ₹ {productPrice}
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
                fontFamily="Work sans"
                >
              {productLocation}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight="bold"
                  fontFamily="Work sans"
                  >
                  
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}    fontFamily="Work sans">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
          {  /*  <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
          </Box>*/}
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
               {/* <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
            </List>*/}
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                
                boxShadow: 'lg',
              }}
              onClick={goToLogin}
              >

              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              {/*<MdLocalShipping />
              <Text>2-3 business days delivery</Text>*/}
              
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }
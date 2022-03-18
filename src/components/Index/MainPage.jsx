import React, { ReactNode, useEffect, useState } from "react";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Link,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
  Button,
  Image,
  Badge,
  Spinner,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";

import { MdLocationOn } from "react-icons/md";

import { GrServices } from "react-icons/gr";
import { IconType } from "react-icons";
import { ReactText } from "react";
import {
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import { BsPerson } from "react-icons/bs";
// import { FiServer } from "react-icons/fi";
// import { GoLocation } from "react-icons/go";
// import CardContent from "../CardContent/CardContent";

import AddProductModal from "../addProduct/AddProductModal";
import { FarmerState } from "../context/ContextApis";
import axios from "axios";

const LinkItems = [
  { name: "Home", icon: FiHome, navigatee: "/login" },
  { name: "Add Product", icon: FiTrendingUp, navigatee: "/screen" },
  { name: "View Products", icon: GrServices, navigatee: "/login" },
  { name: "Category", icon: FiStar, navigatee: "/login" },
  // { name: 'Settings', icon: FiSettings },
];

// const farmerData = [
//   {
//     id: 1,
//     image:
//       "https://media.istockphoto.com/photos/setting-sun-rays-illuminate-a-wheat-field-picture-id181716634",
//     name: "Wheat",
//     price: " 600/ QTL",
//     location: "Aasam",
//     endsIn: "Ends 21 Jan 21",
//   },
//   {
//     id: 2,
//     image: "https://3.imimg.com/data3/PE/KO/MY-6724691/soya-bean-500x500.jpg",
//     name: "Soyabean",
//     price: "700/ QTL",
//     location: "Hariyana",
//     endsIn: "Ends 21 Feb 21",
//   },
//   {
//     id: 3,
//     image: "https://m.media-amazon.com/images/I/51xhMsGOthL.jpg",
//     name: "Chana",
//     price: " 800/ QTL",
//     location: "Chandigarh",
//     endsIn: "Ends 21 March 21",
//   },
//   {
//     id: 4,
//     image: "https://m.media-amazon.com/images/I/81wkaMZmdbL._SL1500_.jpg",
//     name: "Palak",
//     price: " 900/ QTL",
//     location: "Punjab",
//     endsIn: "Ends 21 April 21",
//   },
//   {
//     id: 5,
//     image:
//       "https://5.imimg.com/data5/FN/JF/GLADMIN-51024700/cauliflower-gobi-500gm-500x500.png",
//     name: "Gobi",
//     price: "800/ QTL",
//     location: "Mumbai",
//     endsIn: "Ends 21 May 21",
//   },
// ];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 200 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="Work Sans" fontWeight="bold">
          Agri Bazaar
        </Text>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            <AddProductModal>
              <div onClick={() => navigate(link.navigatee)}>{link.name}</div>
            </AddProductModal>
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{
        textDecoration: "none",
        fontFamily: "Work sans",
        fontWeight: "bold",
      }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { userType, addProduct } = FarmerState();
  const navigate = useNavigate();

  const singleItem = (a) => {
    navigate(`/singleItem/${a._id}`, { state: { data: a } });
  };
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState([])

  // const fetchFarmerData = async () => {
  //   const { data } = await axios.get(`http://localhost:8000/getProduct`);

  //   setProduct(data.product);
  // };

  const fetchFarmerDataa = async () => {
    const { data } = await axios.get(`http://localhost:8000/search?search=${searchTerm}`);

    setProduct(data)
   
  };

  // useEffect(() => {
  //   fetchFarmerData();
  
  // }, [addProduct]);

  useEffect(() => {
   fetchFarmerDataa()
  }, [searchTerm,addProduct])
  

  return (
    <div>
      <Flex
        ml={{ base: 0, md: 200 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
       

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="Work sans"
          fontWeight="bold"
        >
          Agri Bazaar
        </Text>
        {userType && userType === "seller" ? (
          <AddProductModal>
            <Button colorScheme="blue" variant="outline">
              Add Product
            </Button>
          </AddProductModal>
        ) : undefined}

        <HStack spacing={{ base: "0", md: "6" }}>
          {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
       />*/}
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  {/*<Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />*/}

                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      {userType === "seller" ? "seller" : "buyer"}
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                {/*     <MenuItem>Profile</MenuItem>
         <MenuItem>Settings</MenuItem>*/}

                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
     
      </Flex>
     <Box  
     marginTop={3}
     position="relative"
     w={{ base: "90%", md: "75%" }}
     ml={{ base: "5%", md: 225 }}
     px={3}
     py={2}
     borderRadius="lg"
     display="flex"
     >
     <InputGroup>
     <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
     <Input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search Product" />
   </InputGroup>
     </Box>

      {product.map((a) => {
        return (
          <Box
            cursor="pointer"
            key={a._id}
            bg="white"
            color="black"
            marginTop={3}
            position="relative"
            w={{ base: "90%", md: "75%" }}
            ml={{ base: "5%", md: 225 }}
            px={3}
            py={2}
            borderRadius="lg"
            display="flex"
            onClick={() => singleItem(a)}
          >
            <Image
              boxSize="100px"
              objectFit="cover"
              src={a.image}
              alt={a.productImage}
            />

            <Box
              display="flex"
              flexDirection="column"
              position="absolute"
              top="19px"
              left="131px"
            >
              <Text fontSize="sm" fontFamily="Work Sans" fontWeight="bold">
                {a.productName}
              </Text>

              <Text fontSize="sm" fontFamily="Work Sans" fontWeight="700">
                ₹ {a.productPrice}
              </Text>
              <Text fontSize="sm" fontFamily="Work Sans" fontWeight="700">
                {a.productLocation} location to be added
              </Text>
            </Box>

            <Box>
              <Badge
                variant="outline"
                borderRadius="8px"
                ml="1"
                fontSize="0.8em"
                alignSelf="self-start"
                fontWeight="bold"
                position="absolute"
                color="orange"
                right="3vmax"
                colorScheme="purple"
              >
                sell
              </Badge>
            </Box>

            <Box
              alignSelf="self-end"
              fontFamily="Work sans"
              fontWeight="bold"
              position="absolute"
              right="3vmax"
            >
              <Text fontSize="sm" fontFamily="Work Sans" fontWeight="700">
                {a.endsIn} ends in
              </Text>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

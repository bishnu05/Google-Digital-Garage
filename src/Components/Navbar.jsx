 import {Select, Flex, Spacer,Box,Button,ButtonGroup, Image, Link } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
export default function Navbar(){
    return (
        <Flex minWidth='max-content' alignItems='center' gap='6'boxShadow='md' p='5' rounded='md' bg='white'>
        <NavLink to="/" p='2'>
        <Image
      width="220px"
      src={
        "https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw"
      } /> 
        </NavLink>
        <NavLink to="/coursepage"   fontSize='md'letterSpacing="2px" >Online Courses</NavLink>
        <NavLink to="/user"  fontSize='md'>Certification</NavLink>
        <NavLink to="/coursepage"  fontSize='md'>Live Training</NavLink>
        <NavLink to="/user" fontSize='md'>Remote Working</NavLink>
        <Select placeholder='More' w="85px" fontSize='md' border="none" ml="1rem"  >
           <option value="Tools & Resources">Tools & Resources</option>
           <option value="Help & FAQs">Help & FAQs</option>
           <option value="Feedback">Feedback</option>
        </Select>
        <Spacer />
        <ButtonGroup gap='2'>
            <Box color='#3c88eb'pr="2rem" fontSize='md'fontWeight="600">Sign In</Box>
            <Button mr="2rem" fontSize='md'fontWeight="500" p="12px" mt="-12px" bgColor="#3182CE" color="white" h="95%">Register</Button>
        </ButtonGroup>
        
    </Flex>
    )
}

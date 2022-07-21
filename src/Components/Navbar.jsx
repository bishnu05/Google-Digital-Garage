import {Select, Flex, Spacer,Box,Button,ButtonGroup, Image, Link } from '@chakra-ui/react'

export default function Navbar(){
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'boxShadow='md' p='6' rounded='md' bg='white'>
        <Box p='2'>
        <Image
      width="220px"
      src={
        "https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw"
      }
    />
        </Box>
        <Box p="2" pl="2rem" fontSize='md'letterSpacing="2px">Online Courses</Box>
        <Box p="2" pl="1rem" fontSize='md'>Certification</Box>
        <Link to="/training" p="2" pl="1rem" fontSize='md'>Live Training</Link>
        <Box p="2" pl="1rem" fontSize='md'>Remote Working</Box>
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
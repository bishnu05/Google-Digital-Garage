import {
  Box,
  Container,
  Flex,
  Button
} from "@chakra-ui/react";
import logo1 from "../logo1.svg"
function SearchSection() {
    return (
      <>
        <Container  w="40%" mt="6rem" ml="20px" mb="50px">
          <Box  fontSize="5xl" letterSpacing="1px" m="30px"  >
          Learn the skills of the future
          </Box>
          <Flex>
            <Box fontSize="xl" ml="30px">
            Accelerate your career or business with an online
           digital skills course in everything from marketing to
           coding and beyond.
            </Box>
          </Flex>
          <Button bgColor="#3182CE" color="white" mt="30px" mb="20px">
            Find Your Course
          </Button>
        </Container>
         <Container  mr="200px" mt="-340px" h="350px" >
            <img src={logo1} color="white" alt="logo1" />
         </Container>
      </>
    )
}

export default SearchSection;
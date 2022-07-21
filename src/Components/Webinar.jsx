import { Flex, Spacer,Box, Image, Link } from '@chakra-ui/react'

function Webinar(){
    return(
        <>
        <Flex minWidth='max-content' alignItems='center' gap='2'border="1px solid"  p='6' rounded='md' bg='#2B6CB0'>
        <Box p='2'pt="4" pb="4" border="1px solid" bgColor="white" borderRadius="90px" ml="50px">
        <Image
      width="35px"  
      src={
        "https://lh3.googleusercontent.com/N9jW0_MdICcLbzV1L-JcfAXr5QaadNKtc8HgH-KPixv3J9XaSnjLkru3dZl0dfNYR12hEsDkQM_WMXtXqe_ohTSx96E7gmFHwzpXPubIJlfV3ybeTxks=-rw"
      }/>
        </Box>
        <Box color="white" w="45%" m="auto">
                <Box fontSize="4xl" fontWeight="500">Did you know we also have webinars?</Box>
                <Box>Online sessions designed to help you develop skills in less than an hour. You can watch
                    webinars live or register to take part in what is coming up.
                    </Box>
        </Box>
        <Spacer />
        <Link mr="80px" color="white" fontSize="2xl">
        Explore our webinars →
        </Link>
    </Flex>
    <Box w="43%" ml="25%" mt="40px">
        <Box fontSize="4xl" fontWeight="500">
         Do things you never thought possible
        </Box>
        <Box>
        Discover courses in topics designed to help expand your career, business and horizons and
       to upgrade your skills for a new digital world.
        </Box>
    </Box>
    </>
    )
}

export default Webinar;
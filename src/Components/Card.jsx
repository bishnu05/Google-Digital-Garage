import { Box, Flex,Image,Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
function Card(){
    return (
        <>
        <Flex w="60%" m="auto" justifyContent="space-between" gap="15px" mt="60px">
        <Box boxShadow='xl' p='6' rounded='md' bg='white'h="300px" w="33%">
        <Image
      width="55px"  
      src={
        "https://lh3.googleusercontent.com/-0GVWZi0ZL7pLYB8XEJRfDrSC2dI6gT8RvubBrpw2BrIxtHkZY--Jn5FxXC4gp0s0fTJa4aV59o1F29qXNv_HBxcwW7zyyiDSMegNwBOEcgS_KU27Fiw=w64"
      } />
        <Box fontWeight="500" mt="4" textAlign="left">Digital Marketing</Box>
        <Box textAlign="left">Get certified free of charge in our Fundamentals of digital marketing course, or explore other content to help get your business online.</Box>
        <ArrowForwardIcon ml="160px" color="blue" mt="40px"/>
        </Box>

        <Box boxShadow='xl' p='6' rounded='md' bg='white'h="300px" w="33%">
        <Image
      width="55px"  
      src={
        "https://lh3.googleusercontent.com/yUtRjWMWqcVM2Z0MWD3KX1GCkqO585TTOGlDeu3yOLIqv4Zd_Ywa6Fh-YurdcjqfYS0nZrUGBI8V-24saZac4YOri5yuoApFaxJwJZ2IzWEDaWYMfA=w64"
      }/>
        <Box fontWeight="500" mt="4" textAlign="left">Career development</Box>
        <Box textAlign="left">Gain the skills you need to enhance your career or gain a new job.</Box>
        <ArrowForwardIcon ml="160px" color="blue" mt="60px"/>
        </Box>

        <Box boxShadow='xl' p='6' rounded='md' bg='white'h="300px" w="33%">
        <Image
      width="55px"  
      src={
        "https://lh3.googleusercontent.com/XyURkvWIqHkfiP5yHRbJOHjUYNfEbVfqP_WoHllMs8n0su4vWyB9iwGca_UaqNRfIRLcPw-smh6Ra5XWl3R9Td-PhQcrK6KwsNiF8w8i2bIz0JcHLeP-=w64"
      }/>
        <Box fontWeight="500" mt="4" textAlign="left">Data</Box>
        <Box textAlign="left">Demand for workers with specialist data skills has more than tripled over the last five years.</Box>
        <ArrowForwardIcon ml="160px" color="blue" mt="60px"/>
        </Box>
          
        </Flex>
      
        </>
    )
}

export default Card;
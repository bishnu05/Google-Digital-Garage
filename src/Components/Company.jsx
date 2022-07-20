import { Box, Container, Flex,Image } from "@chakra-ui/react";


function Company(){
    return (
        <Container ml="100px"  mt="60px" w="full">
             <Box>
             We provide courses along with leading institutions and companies
             </Box>
             <Flex>
             <Box minWidth='max-content' gap='2' p='4' rounded='md' bg='white'>
        <Image
      width="80px"
      src={
        "https://lh3.googleusercontent.com/jJZnt3_ZEgqPLoDXv9OMtmvHQ13ExWDcg4TeOruamOAm1MLaLGmzj1qwz4VBveo0Q_LCph1Idy558gyl5KHp5HDEbTxRdkzD5sGjDOjBhte3eqvw8A=w160"
      }/>
        </Box>
        <Box minWidth='max-content' gap='2' p='4' rounded='md' bg='white'>
        <Image
      width="80px"
      src={
        "https://lh3.googleusercontent.com/Q3wBjzp1-TGEZWpdp-E6PSkc-nMEV66Jaokd4gUjyGh95KMqQyR1I7Gu1eSU7qifjLuiwVJrEmB92HPTa4Hr3e6Mh7JGk7zrQ8YmZ-1HQCWZpKHpzTU=w160"
      }/>
        </Box>
        <Box minWidth='max-content' gap='2' p='4' rounded='md' bg='white'>
        <Image
      width="50px"
      src={
        "https://lh3.googleusercontent.com/MVTsJCD1WJjExvucPvW4GWYHnJ6YLPgQEFijPCVpSyfIM1wAgVvW-AQghsLFZLoWgnBCYbqI3wOveQ1RdOeDf_2Sgo03A7zN8Pwd6NSsu_wBuITKdiE=w160"
      }/>
        </Box>
        <Box minWidth='max-content' gap='2' p='4' rounded='md' bg='white'>
        <Image
      width="80px"
      src={
        "https://lh3.googleusercontent.com/oDBNKrOW0hYPsQgbz7v2BAUCjUoPfuyBBaqUFGg-oify2xKieu2OjW_6C_6smen-YNlOf_CR8M3-VN5pOy_3r4VQ1FPdOUk8mrO58abJNS0RwN9_YYY=w160"
      }/>
        </Box>
        <Box minWidth='max-content' gap='2' p='4' rounded='md' bg='white'>
        <Image
      width="80px"
      src={
        "https://lh3.googleusercontent.com/KZYTEfg4wkORJscNEaj27bVFV83vzRB_6Kd7Fwpqnd5KipwGdqkkulHt9KPWr8oPQnHsh2zyw1tpPyKbB_HfzrG6XTeoy91EONnq9fRj6dV9p4HL_TA=w160"
      }/>
        </Box>
        </Flex>
        </Container>
        
    )
}

export default Company;
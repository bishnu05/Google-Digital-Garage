import {
    Box,
    Container,
    Flex,
    Button,
    Image
  } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  import hello from "./hello.svg.png"
  function Certificate() {
const [data,setData]=useState({})
const params=useParams()
useEffect(() => {
  //console.log(params.course_id,"bishnu")
  axios.get(`https://floating-crag-24295.herokuapp.com/courses/${params.course_id}`)
    .then((res) => {
      setData(res.data);
      console.log(res.data)
    });
}, []);

      return (
        <>
          <Container  w="80%" mt="6rem"  mb="50px"  ml="6%" mr="-20%" >
            <Box  fontSize="4xl"    mr="-20%" ml="-9%">
            {data.title}
            </Box>
            <Flex>
              <Box fontSize="md"  mr="-20%" ml="-1%">
              Learn the fundamentals of digital marketing to help your business or career.
              </Box>
            </Flex>
            
            <Container>
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
        </Flex>
        </Container>

          </Container>
          <Button bgColor="#3182CE" color="white" mt="20px" mb="20px" ml="-76%">
              Start Course
            </Button>
           <Container  mr="200px" mt="-250px" h="290px"  >
              <img w="100%"  src={data.img} color="white" alt="Digital marketing" />
           </Container>
           <Image src={hello} />
        </>
      )
  }
  
  export default Certificate;



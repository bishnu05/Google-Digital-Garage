import { ArrowForwardIcon, HamburgerIcon, RepeatClockIcon } from "@chakra-ui/icons"
import { Flex, Grid, Img,Box,Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from 'axios';
import Pagination from "./Pagination";

export default function Products(){
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [filter,setFilter] = useState("")
    const handlePageNext=()=>{
        setPage(page+1)
    }
    const handlePagePrev=()=>{
        setPage((prev)=>prev-1)
    }
  const handleFilter=(e)=>{
    console.log(e.target.value)
  }

  useEffect(()=>{
    axios.get(`https://floating-crag-24295.herokuapp.com/courses?_page=${page}&_limit=12`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
  },[page])

  return (
    <Box boxShadow='md' p='6' rounded='md' bg='white' mt="30px" mb="60px">
        <Flex border="1px solid " w="15%" textAlign="right" h="auto" ml="90px" mt="20px">

            ggggggggggggggggggggggg
            ggggggggggggggggggggggg
            
        </Flex>
        <Grid templateColumns="repeat(3,1fr)" gap="4" w="65%"  ml="25%" textAlign="left"mt="-70px">
            {data.map((item)=>(
                <Box value={item.id} name={item.id} key={item.id} boxShadow='2xl' p='6' rounded='md' bg='white'>
                    <Img w="100%" h="170px" src={item.img}/>
                    <Flex gap="2">
                        <Text>{item.title}</Text>
                    </Flex>
                    <Text>{item.creater}</Text>
                    <Flex gap="8">
                       <Text><HamburgerIcon color="yellow"/>{item.module}</Text>
                       <Text><RepeatClockIcon/>{item.time}</Text> 
                    </Flex>
                    <ArrowForwardIcon ml="230px" color="blue" mt="35px" fontSize="22px"/>
                </Box>
            ))}
            
        </Grid>
        <Pagination handlePagePrev={handlePagePrev} handlePageNext={handlePageNext} current={page}/>
    </Box>
  )
}
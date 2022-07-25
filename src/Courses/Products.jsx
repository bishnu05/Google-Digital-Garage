import { ArrowForwardIcon, HamburgerIcon, RepeatClockIcon } from "@chakra-ui/icons"
import { Flex, Grid, Img,Box,Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from 'axios';
import Pagination from "./Pagination";
import { Link, useSearchParams } from "react-router-dom";

export default function Products(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [data,setData] = useState([])
    const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
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
    setSearchParams({
       page
    })
    axios.get(`https://floating-crag-24295.herokuapp.com/courses?_page=${page}&_limit=12`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
  },[page])

  return (
    <Box boxShadow='md' p='6' rounded='md' bg='white' mt="30px" mb="60px">
        <Flex  w="15%" textAlign="right" h="auto" ml="90px" mt="20px">
           
        </Flex>
        <Grid templateColumns="repeat(3,1fr)" gap="4" w="65%"  ml="25%" textAlign="left"mt="-70px">
            {data.map((item)=>(
                <Box value={item.id} name={item.id} key={item.id} boxShadow='2xl' p='6' rounded='md' bg='white'>
                    <Img w="100%" h="160px" src={item.img}/>
                    <Flex gap="2" fontSize="xl" fontWeight="500">
                        <Text>{item.title}</Text>
                    </Flex>
                    <Text>{item.creater}</Text>
                    <Flex gap="8">
                       <Text><HamburgerIcon color="yellow"/>{item.module}</Text>
                       <Text><RepeatClockIcon color="yellow"/>{item.time}</Text> 
                    </Flex>
                    {/* <Text>{item.id}</Text> */}
                <Link to={`/coursepage/${item.id}`}><ArrowForwardIcon ml="230px" color="blue" mt="35px" fontSize="22px"/></Link>
                </Box>
            ))}
            
        </Grid>
        <Pagination handlePagePrev={handlePagePrev} handlePageNext={handlePageNext} current={page}/>
    </Box>
  )
}
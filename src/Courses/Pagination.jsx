import { Button,Box } from "@chakra-ui/react";

export default function Pagination({handlePageNext,current,handlePagePrev}){

    return (
        <Box mt="15px">
            <span>
                <Button colorScheme="teal" onClick={handlePagePrev} mr="5px" disabled={current===1}>Prev</Button>
                <Button colorScheme="gray" >{current}</Button> 
                <Button colorScheme="teal" onClick={handlePageNext} ml="5px" >Next</Button>
            </span>
        </Box>
    )
}
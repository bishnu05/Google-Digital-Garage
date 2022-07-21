import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/accordion"
  import { Flex,  Image } from '@chakra-ui/react'
  import { Box, Button } from "@chakra-ui/react";

function Faqs(){
    return (
      <>
      <Flex minWidth='max-content' alignItems='center' gap='2'  p='6' rounded='md' bgColor="RGBA(0, 0, 0, 0.04)" mt="70px">
        <Box p='2' ml="50px">
        <Image
      width="390px"  
      src={
        "https://lh3.googleusercontent.com/DxI7wff6hMCJz5NdnBMDjV8KJlLJOhUShC4cg5ZAGUWvS-wWwqzkuM5VKeFNLZQhxR7wW_WL5RY71ShVN1-FVmofpRoXZppnuud5H0JBeLASVYFO2Fi3=w680-rw"
      }
    />
        </Box>
        <Box  w="30%" ml="20px">
                <Box>Since 2015, we've trained over 700,000 people, to help them find a job, grow their career or
                     business. Across Britain, local businesses, communities and people are using Google tools and
                     training to thrive. Discover how Google is helping the UK economy to grow.
                </Box>
                <Button color="blue" border="1px solid blue" mt="30px">
                     Explore now 
                </Button>
        </Box>
        
    </Flex>
    
        <Accordion defaultIndex={[0]} allowMultiple w="55%" ml="20%">
            <Box mt="10" mb="10" fontSize="4xl">FAQs</Box>
  <AccordionItem p="6">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Who is Google Digital Garage for?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Everyone. Gain today's most in-demand skills, whether you're growing your business, starting a career, or just want to try something new. We've got a range of courses and over 40 hours of learning available to help take you where you need to go. If you're keen to come and learn, we're keen to meet you!
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p="6">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Who provides the courses?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Some of the courses are provided by us, and others from our partner universities or institutions.
    </AccordionPanel>
  </AccordionItem>
  <Button mb="8" mt="8">See all FAQs</Button>
</Accordion>
</>
    )
}

export default Faqs;
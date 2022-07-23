import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/accordion"
  
  import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

function Faq2(){
    return (
      <>
        <Accordion defaultIndex={[0]} allowMultiple w="55%" ml="20%">
            <Box mt="10" mb="10" fontSize="4xl">FAQs</Box>
  <AccordionItem p="6">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight="600" fontSize="xl">
        Who provides the Digital Marketing certification by Google?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You will be able to download your digital marketing certificate from the Google Fundamentals of Digital Marketing course landing page when you've completed the course. A progress indicator on the certification course page will show you how far you've come, and what modules you need to complete to earn your certificate.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p="6">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontWeight="600" fontSize="xl">
        How can l be awarded a Digital Marketing certificate?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Youll earn an authentic Digital Marketing certification from Google, by completing all modules in The Google Digital Garage.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p="6">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight="600" fontSize="xl" >
        How do I get the Google Digital Garage certificate?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You'll be able to download a PDF copy of the digital marketing certificate from the Fundamentals of Digital Marketing course page once you've passed the final test.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem p="6">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontWeight="600" fontSize="xl" >
       I lost my certificate, where can I get it again?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Once you pass the final test, return to the Fundamentals of Digital Marketing course page to download your digital marketing certificate whenever you like.
    </AccordionPanel>
  </AccordionItem>

  <Button mb="8" mt="8">See all FAQs</Button>
</Accordion>

<Flex mt="100px"  ml="370px" w="50%" >
    <Box m="auto" fontSize="2xl" >
       Start today and get a certificate in Fundamentals of Digital Marketing
    </Box>
</Flex>
   <Box m="auto" mt="30px" mb="50px">
   <Button bgColor="blue" color="white">Start Course</Button>
   </Box>
</>
    )
}

export default Faq2;
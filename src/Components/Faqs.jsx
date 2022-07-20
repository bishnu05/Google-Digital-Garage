import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/accordion"

  import { Box, Button } from "@chakra-ui/react";

function Faqs(){
    return (
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
    )
}

export default Faqs;
import {
    Box,
    Container,
    Select,
    Flex,
    Image
  } from "@chakra-ui/react";

function Footer(){
    return (
        <>
        <Container ml="30px">
        <Box  fontSize="2xl"  >
        A Grow with Google PROGRAMME
        </Box>
      </Container>
      <Container  mr="30px" w="20%" >
      <Box textAlign="left">
        Privacy & Terms
        </Box>
        <Select placeholder='United Kingdom' ml="120px" mt="-30px" w="62%">
        <option value='Africa'>Africa</option>
        <option value='Afrique'>Afrique</option>
        <option value='Australia'>Australia</option>
        <option value='Belgique'>Belgique</option>
        <option value='Belgie'>Belgie</option>
        <option value='Brazil'>Brazil</option>
        <option value='Ceska republika'>Ceska republika</option>
        <option value='Danmark'>Danmark</option>
        <option value='Eesti'>Eesti</option>
        <option value='Espana'>Espana</option>
        <option value='European'>European</option>
        <option value='France'>France</option>
        <option value='Ireland'>Ireland</option>
        <option value='India'>India</option>
        <option value='Italia'>Italia</option>
        <option value='Malta'>Malta</option>
        <option value='Latvija'>Latvija</option>
        <option value='Lietuva'>Lietuva</option>
        <option value='Lusembourg(EN)'>Lusembourg(EN)</option>
        <option value='MENA'>MENA</option>
        <option value='Nedeland'>Nedeland</option>
        <option value='Polska'>Polska</option>
        <option value='Portugal'>Portugal</option>
        <option value='Romania'>Romania</option>
        <option value='Sverige'>Sverige</option>
        <option value='Schweiz'>Schweiz</option>
        <option value='Suomi'>Suomi</option>
        <option value='Suisse'>Suisse</option>
        <option value='Turkce'>Turkce</option>
    </Select>
      </Container>
      <Flex minWidth='max-content' justifyContent="right" gap='2' pr='12' rounded='md' bg='white'>
         <Box textAlign="center" p="4">Share</Box>
        <Box p='4' >
        <Image
      width="30px" 
      src={
        "https://lh3.googleusercontent.com/sw4rOkreSopt2DcXlOCH9HPwHm7pPgeBsO8DFqWnnVPifC4473ztUcLCT49kDnDj5c-ClaRCOQKmBvbrzqICFq7yNgcqq8-byBV0aw=-rw"
      }
    />
        </Box>
        <Box p='4' >
        <Image
      width="30px" 
      src={
        "https://lh3.googleusercontent.com/O73TcAUC463DfCnA87ap5gw7uWPW2R6owA8p-jcmHYJuysd2BVT_W-1PzUdxk_kbzjQ-OHuTt4W1i3N4hi_KtCkBifUtpZFPlz4R=-rw"
      }
    />
        </Box>
        <Box p='4' >
        <Image
      width="30px" 
      src={
        "https://lh3.googleusercontent.com/2PFoqNpZ5xu9JK1u_CRR0aiYqGb0K6cOKkzmS2Ux0rucddJgNeMwsniGFMzQWopCdNK9rBzq73N0188sAtK_UFpgUHPPgz2XyDG5=-rw"
      }
    />
        </Box>
        </Flex>
      </>
    )
}

export default Footer;
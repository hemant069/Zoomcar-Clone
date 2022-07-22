import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import {BsEye,BsEyeSlash,BsArrowLeft} from "react-icons/bs"
export const DetailForm = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show) 
  return (
    <SimpleGrid justifyContent={"center"} >
        <Box >
            
        <Box fontWeight={700}  >
         Fill In A Few More Details
        </Box>
        <Box fontSize={"12px"} color="grey">One last step to create a new account</Box>
        <FormControl width={"140%"}>
       
        <Input focusBorderColor='#10a310' type="text" mt="8" placeholder='Full Name (As Per Driving License)'/>
        

        <InputGroup size='md' mt="5">
      <Input
        pr='4.5rem'
        focusBorderColor='#10a310'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? <BsEyeSlash/> : <BsEye/>}
        </Button>
      </InputRightElement>
    </InputGroup>
        <Box fontSize={"12px"} color={'grey'}>Min 8 Characters</Box>
        <Button ml="15%" width={"16rem"} mt="20%" bg="#10a310" color="white">Sumbit</Button>
        </FormControl>
        </Box>
    </SimpleGrid>
  )
}

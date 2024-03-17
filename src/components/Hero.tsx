'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container maxW={'7xl'} >
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              mb={'2'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#6765f0',
                zIndex: -1,
              }}>
              Right Way
            </Text>
           
            <Flex direction={'column'} position={'relative'}>
                <Text as={'span'} color={'#6765f0'}>
                    YOGA
                </Text>
                <Image position={'absolute'} bottom={'-5'} 
                left={'0'} zIndex={'0'} src="/line.png" alt="" width='200px'/>
            </Flex>
            
          </Heading>
          <Text color={'gray.500'}>
          With a subscription to our studio, you can attend any of 
          the proposed yoga directions at a convenient time for you. 
          Sign up and have fun.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'#6765f0'}
              _hover={{ bg: '#725efe' }}>
              Our Services
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={onOpen}
              >
              Watch Video
            </Button>
          </Stack>
        </Stack>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box as='iframe'
              src='/video-yoga.mp4'
              width='100%'
              
              sx={{
                aspectRatio: '16/9'
              }}
              />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
        
          <Box
            position={'relative'}
            height={'390px'}
            rounded={'2xl'}
           
            width={'full'}
            overflow={'hidden'}>
            
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src='/hero.png'
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}


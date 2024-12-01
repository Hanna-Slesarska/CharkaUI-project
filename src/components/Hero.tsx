// 'use client'

// import { Button } from "@/components/ui/button"
// import { HStack } from "@chakra-ui/react"
// import { Image, Box, Container, Heading, Highlight, Text, Flex } from "@chakra-ui/react"



// const Hero = () => {
//   return (
// <Flex w="100vw" h="100vh">
//       {/* Left Text Container */}
//       <Box
//         flex="1"
//         bg="gray.100"
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="flex-start"
//         px="8"
//         zIndex='-1'
//       >
//         <Heading as="h1" size="2xl" mb="4" color="gray.800">
//           <Highlight query="there!" styles={{ color: "teal.600" }}>
//             Hi there!
//           </Highlight>
//       </Heading>
//         <Text fontSize="lg" color="gray.600">
//         My name is Hanna and I am a web developer.
//         </Text>
//       </Box>

//       {/* Right Image Container with Overlay */}
//       <Box
//         flex="1"
//         bgImage="url('./my_photo.jpg')"
//         bgSize="cover"
//         bgPosition="bottom"
//         position="relative"
//       >
//         {/* Overlay */}
//         <Box
//           position="absolute"
//           top="0"
//           left="0"
//           right="0"
//           bottom="0"
//           bg="blackAlpha.750" // Semi-transparent black overlay
//           zIndex="1"
//         >
//         </Box>
//       </Box>
//     </Flex>
  
//   )
// }

// export default Hero

import { Box,Image, Flex, Heading, Highlight, Text } from "@chakra-ui/react"

const Hero = () => {
  return (
    <Flex w="100vw" h="100vh">
      {/* Left Text Container */}
      <Box
        flex="1"
        bg="gray.100"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        px="16"
      >
        <Heading as="h1" size="2xl" mb="4" color="gray.800" fontSize="128px">
          <Highlight query="there!" styles={{ color: "teal.600" }}>
            Hi there!
          </Highlight>
        </Heading>
        <Text fontSize="lg" color="gray.600" py="16" w="90%">
          I’m a web developer, which means I spend most of my time convincing computers 
          to do what I want (and occasionally Googling why they won’t). 
          When I’m not knee-deep in code, you’ll probably find me drinking an unhealthy 
          amount of coffee, trying to remember where I left my phone, or staring at my screen 
          pretending to debug something important. I create websites that look pretty, work seamlessly, 
          and occasionally impress my family. Welcome to my corner of the internet—make yourself at home!
        </Text>
        <Image 
          src="./my_photo.jpg"
          position="absolute"
          objectFit="cover"
          top="50%" 
          right="20%" 
          transform="translate(-50%, -50%)"
          w="380px"
          h="480px"
          zIndex="15"
          borderRadius="lg" 
          boxShadow="lg"
        />
      </Box>

      {/* Right Image Container with Overlay */}
      <Box
        flex="1"
        bgImage="url('./my_photo.jpg')" // Your image path
        bgSize="cover"
        bgPosition="bottom"
        position="relative"
        px="16"
      >
        {/* Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(13, 148, 136, 0.7)" // Semi-transparent black overlay
          zIndex="1"
        ></Box>

        {/* Ensuring the container content is behind the overlay */}
        <Box
          position="relative"
          zIndex="0"
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
        </Box>
      </Box>
    </Flex>
  )
}

export default Hero

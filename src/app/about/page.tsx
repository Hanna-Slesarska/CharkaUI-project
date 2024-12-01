import { Box,Image, Flex, Heading, Highlight, Text } from "@chakra-ui/react"


export default function AboutPage() {
  return (
    <>
    <Flex 
  w="100vw" 
  h="100vh" 
  bg="rgba(13, 148, 136, 0.8)" 
  align="center" 
  justify="center" 
  p={8}
  mb={20}
  
>
  {/* Container for Text and Image */}
  <Flex 
    direction={{ base: "column", md: "row" }} 
    align="center" 
    justify="center" 
    gap={8} // Space between elements
    w="100%" 
    maxW="1200px"
    mt={20} 
  >
    {/* Text Section */}
    <Box 
      w={{ base: "100%", md: "50%" }} 
      textAlign={{ base: "center", md: "left" }}
    >
      <Heading as="h1" size="xl" mb={4} color="white">
        Hiking: Explore the World, One Trail at a Time
      </Heading>
      <Text fontSize="lg" color="white">
        Hiking is more than just a walk in nature—it’s an adventure that awakens the soul. 
        Whether you’re scaling rugged mountain peaks, wandering through dense forests, or 
        strolling along tranquil coastal paths, hiking offers a unique opportunity to disconnect 
        from the digital world and reconnect with the natural one.
      </Text>
    </Box>

    {/* Image Section */}
    <Image 
      src="./hiking.jpg"
      w={{ base: "100%", md: "450px" }} 
      h="640px" 
      objectFit="cover" 
      borderRadius="lg" 
      boxShadow="lg"
    />
  </Flex>

</Flex>

<Flex 
  w="100vw" 
  h="100vh" 
  align="center" 
  justify="center" 
  p={8}
  mb={20}
  
>
  {/* Container for Text and Image */}
  <Flex 
    direction={{ base: "column", md: "row" }} 
    align="center" 
    justify="center" 
    gap={8} // Space between elements
    w="100%" 
    maxW="1200px"
    mt={20} 
  >
     {/* Image Section */}
     <Image 
      src="./baking.jpg"
      w={{ base: "100%", md: "450px" }} 
      h="650px" 
      objectFit="cover" 
      borderRadius="lg" 
      boxShadow="lg"
    />
    {/* Text Section */}
    <Box 
      w={{ base: "100%", md: "50%" }} 
      textAlign={{ base: "center", md: "left" }}
    >
      <Heading as="h1" size="xl" mb={4} color="black">
        Baking: A Delicious Hobby That Warms the Heart and Soul
      </Heading>
      <Text fontSize="lg" color="black">
        Baking is more than just mixing ingredients—it's an art form, 
        a science, and a way to express love. Whether you're kneading 
        dough for a fresh loaf of bread, decorating cookies for a special 
        occasion, or experimenting with the perfect cupcake recipe, 
        baking is a hobby that brings joy to both the baker and those 
        who get to enjoy the results.
      </Text>
    </Box>

   
  </Flex>
</Flex>
    
    </>
    


  );
}

'use client'

import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  SimpleGrid,
  SpaceProps,
  useColorModeValue,
  Container,
  Center,
  Stack,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

interface Props {
  marginTop?: number
  tags: any[]
}

const articles = [
  {
    image: "https://images.unsplash.com/photo-1480001939717-9952e8200db2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pick Beginner-Friendly Trails",
    text: "Start with well-marked trails like those in national parks to build confidence."
  },
  {
    image: "https://images.unsplash.com/photo-1484911579927-b3f008130467?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Invest in the Right Gear",
    text: "Sturdy hiking boots, a good backpack, and clothing are essentials."
  },
  {
    image: "https://images.unsplash.com/photo-1606658635939-3d6b10204dc3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Perfecting the Classic Cherry Pie",
    text: "Cherry pie is a beloved classic that brings comfort to any table."
  },
  {
    image: "https://images.unsplash.com/photo-1605433246995-23f532d1e001?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fun and Easy Baking Projects for Kids",
    text: "Baking with kids is a wonderful way to spend quality time together."
  }
]
interface ArticleCardProps {
  title: string
  text: string
  image: string
  index: number
}
const ArticleCard = (props: ArticleCardProps) => {
  const { title, text, image, index } = props
  return (
    <Center mx={2} py={6} >
    <Box
      maxW={'350px'}
      w={'full'}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image
          src={image}
          alt="Example"
          w="100%" // Adjust width
          h="auto" // Maintain aspect ratio
          objectFit="cover"
        />
      </Box>
      <Stack>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>
          Blog
        </Text>
        <Heading
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}>
          {title}
        </Heading>
        <Text color={'gray.500'}>
         {text}
        </Text>
      </Stack>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <BlogAuthor color="white" name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
      </Stack>
    </Box>
  </Center>
            
        
      
  )
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
  color: string
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const BlogPage = () => {
  return (
    <Box bg="rgba(13, 148, 136, 0.8)" minH="100vh">
      <Container maxW={'7xl'} p="12" >
        <Heading as="h1" mt="24" color="white">Stories by Chakra Templates</Heading>
        <Box
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={
                    'https://images.unsplash.com/photo-1616430284384-62ba9ce6c11d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)',
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <BlogTags tags={['Engineering', 'Product']} />
            <Heading marginTop="1" color="white">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Blog article title
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color="white"
              fontSize="lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </Text>
            <BlogAuthor color="white" name="John Doe" date={new Date('2024-04-06T19:01:27Z')} />
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="10" />
       
        <Wrap spacing='10px' align='center'>
          <WrapItem>
            {articles.map((cardInfo, index) => (
          <ArticleCard key={index} {...cardInfo} index={index} />
        ))}
          </WrapItem>
        </Wrap>
      </Container>
    </Box>
  )
}

export default BlogPage

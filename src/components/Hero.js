import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue} from '@chakra-ui/react'
  import {Link as WouterLink} from "wouter";
export default function Hero() {
  return (
    <Stack  marginTop={6}minH={'40vh'} direction={{ base: 'column', md: 'row' }} background={"#495e57"}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'yellow.400',
                zIndex: -1,
              }}>
              Little Lemon
            </Text>
            <br />{' '}
            <Text color={'yellow.400'} as={'span'}>
              Chicago
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <WouterLink to="/reserve">
            <Button
              rounded={'full'}
              bg={'yellow.400'}
              color={'black'}
              _hover={{
                bg: 'orange.700',
              }}>
              Reserve Table
            </Button>
            </WouterLink>
          </Stack>
        </Stack>
      </Flex>
      
    
      <Image
      alt={'Booking Image'}
      objectFit={'cover'}

      src={"/images/hero.jpg"}
    />
       
    
    </Stack>
  )
}
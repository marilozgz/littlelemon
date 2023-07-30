'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import logo from "../assets/small_logo.png"

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
    background={"#495e57"} marginTop={10} color={"white"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6} >
            <Box width={70} background={"white"} p={4}>
              <img src={logo} alt='logo' height={50} width={50} background={"white"}/>
            </Box>
            <Text fontSize={'sm'}>© 2023 Lalolatech. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Navigation</ListHeader>
            <Box as="a" href={'#'}>
              About us
            </Box>
            <Box as="a" href={'#'}>
              Menu
            </Box>
            <Box as="a" href={'#'}>
              Reservation
            </Box>
            <Box as="a" href={'#'}>
              Order
            </Box>
            <Box as="a" href={'#'}>
              Login
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <Box as="a" href={'#'}>
              2835 Maldowver Street
            </Box>
            <Box as="a" href={'#'}>
              Chicago, IL 60607
            </Box>
            <Box as="a" href={'#'}>
              (312) 555-0102
            </Box>
            <Box as="a" href={'#'}>
              hello@littlelemon.com
            </Box>
           
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.900',
                }}
              />
              <IconButton
                bg={useColorModeValue('yellow.400', 'yellow.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'gray.200',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
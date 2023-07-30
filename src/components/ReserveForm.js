import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { Link } from 'wouter'

export default function ReserveForm() {
  return (
    <Flex
      minH={'10vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
     
      <HStack>
        <FormControl id="firstname" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="First Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="lastname" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="last name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="email"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <HStack>
        <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input
                placeholder="phone"
                _placeholder={{ color: 'gray.500' }}
                type="phone"
            />
        </FormControl>
        <FormControl id="guests" isRequired>
            <FormLabel>Guests</FormLabel>
            <Input
                placeholder="guests"
                _placeholder={{ color: 'gray.500' }}
                type="guests"
            />
        </FormControl>
        </HStack>
        <HStack>
        <FormControl id="date" isRequired>
            <FormLabel>Date</FormLabel>
            <Input
                placeholder="date"
                _placeholder={{ color: 'gray.500' }}
                type="date"
            />
        </FormControl>
        <FormControl id="time" isRequired>
            <FormLabel>Time</FormLabel>
            <Input
                placeholder="time"
                _placeholder={{ color: 'gray.500' }}
                type="time"
            />
        </FormControl>
        </HStack>
        <HStack>
        <FormControl id="special" isRequired>   
            <FormLabel>Seating Preferences</FormLabel>
            <Input
                placeholder="seating preferences or special"
                _placeholder={{ color: 'gray.500' }}
                type="special"
            />
        </FormControl>
        </HStack>
        <FormControl id="comments" >
            <FormLabel>Comments</FormLabel>
        <Input
            type={'textarea'}
            placeholder={'Comments'}
            bg={useColorModeValue('gray.100', 'gray.700')}
            border={0}
            _focus={{
            bg: 'gray.200',
            }}
        />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
        <Link href="/">
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
        </Link>
          <Button
            bg={'yellow.400'}
            color={'black'}
            w="full"
            _hover={{
              bg: 'orange.500',
            }}>
            Book Table
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
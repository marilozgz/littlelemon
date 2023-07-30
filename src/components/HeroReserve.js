'use client'

import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'20vh'}
      backgroundImage={
        'url(/images/herobook.jpg)'
      }
      backgroundSize={'cover'}
      marginTop={10}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
       
          <Stack direction={'row'}>
            <Text
              fontSize={'4xl'}
              fontWeight={700}
              rounded={'full'}
              color={'yellow.400'}
              shadow={'xl'}
             >
              Reserve a Table
            </Text>
         
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
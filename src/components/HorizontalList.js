import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Card,
  Image,
  Text,
  CardBody,
  CardFooter,
  CardHeader,
  VStack,
} from "@chakra-ui/react";
import { left } from "@popperjs/core";

const Food = [
  {
    name: "Special Salad",
    description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
    price: "$12.99",
    image: "images/salad.jpg",
  },
  {
    name: "Hawaiian Pizza",
    description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
    price: "$19.99",
    image: "/images/pizza.jpg",
  },
  {
    name: "Red Velvet Cake",
    description: "Lorem ipsum dolor sit amet catetur, adipisicing elit.",
    price: "$7.99",
    image: "/images/cake.jpg",
  },
];
console.log(Food);

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} maxW={"3xl"} marginStart={10}>
        <Heading
          fontSize={{
            base: "xl",
            sm: "2xl",
          }}
          fontWeight={"bold"}
          textAlign={left}
        >
          This weeks specials
        </Heading>
        <Button
          width={200}
          bg={"yellow.400"}
          color={"black"}
          _hover={{ bg: "orange.700" }}
        >
          Online Menu
        </Button>
      </Stack>

      <Container maxW={""} mt={12}>
        <Flex flexWrap="wrap" gridGap={10} justify="center">
          {Food.map((food) => (
            <Card
              key={food.name}
              maxW={"320px"}
              w={"full"}
              bg={"gray.800"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"120px"}
                w={"full"}
                alt=""
                src={food.image}
                objectFit={"cover"}
              />
              <VStack align={"start"} spacing={0} mt={3}>
                <CardBody>
                  <Text color={"gray.200"} fontSize={"sm"} fontWeight={800}>
                    {food.price}
                  </Text>
                  <Text
                    color={"green.300"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {food.name}
                  </Text>
                  <Text color={"gray.500"}>{food.description}</Text>
                </CardBody>
              </VStack>
              <Flex justify={"center"}>
                <Box
                  bg={"gray.800"}
                  color={"white"}
                  rounded={"full"}
                  px={3}
                  py={1}
                  fontSize={"sm"}
                >
                  <Button
                    bg={"yellow.400"}
                    color={"black"}
                    _hover={{
                      bg: "orange.700",
                    }}
                  >
                    Order Now
                  </Button>
                </Box>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

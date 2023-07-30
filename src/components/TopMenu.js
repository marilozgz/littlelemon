import React from "react";
import logo from "../assets/littlelemon_logo.png";
import { Flex, Spacer, Box, HStack, Link } from "@chakra-ui/react";
const TopMenu = () => {
  return (
    <nav>
      <Flex color="white" marginInlineStart={20} marginTop={10}>
      <Box> <img
      href="#home"
      src={logo}
      alt="logo"
      width={200}
    /></Box>
    <Spacer />
       <HStack  spacing='24px' color={"gray.400"} marginEnd={20}> 
        
            <Link href="/">Home</Link>{" "}
         
            <Link href="/about">About</Link>{" "}
         
            <Link href="/menu">Menu</Link>{" "}
         
            <Link href="/booking">Reservations</Link>{" "}
          
            <Link href="/order-online">Order Online</Link>{" "}
          
            <Link href="/login">Login</Link>{" "}
         
        </HStack>
      </Flex>
    </nav>
  );
};
export default TopMenu;

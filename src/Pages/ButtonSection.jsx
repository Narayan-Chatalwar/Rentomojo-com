import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";


export default function ButtonSection({ price, handleCart, toast }) {
  

  return (
    <Box
      position={{ md: "fixed", base: "fixed" }}
      bottom={{ md: "0", base: "0" }}
      left={{ md: "0", base: "0" }}
      right={{ md: "0", base: "0" }}
      border="1px solid #e9e9e9"
      h="fit-content"
      display={{ xl: "none", md: "flex", base: "flex" }}
      justifyContent={{ md: "space-between", base: "space-between" }}
      alignItems={{ md: "center", base: "center" }}
      bg="white"
      w={{ md: "full", base: "100%" }}
      boxSizing="border-box"
      px="7%"
      zIndex="2"
      p="16px"
    >
      <Text fontWeight="500">&#8377; {price} /mo</Text>
      <Button
        colorScheme="red"
        onClick={() => (
          toast({
            title: "Item added.",
            position:"top-right",
            description: "this item added to your cart.",
            status: "success",
            duration: 
            3000,
            isClosable: true,
          }),
          handleCart()
        )}
      >
        Book your plan
      </Button>
    </Box>
  );
}

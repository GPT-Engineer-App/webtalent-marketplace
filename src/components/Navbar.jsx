import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex align="center" maxW="container.lg" mx="auto">
        <Text fontSize="xl" fontWeight="bold">
          Particles Marketplace
        </Text>
        <Spacer />
        <Box>
          <Text as="a" href="/" mr={4}>
            Home
          </Text>
          <Text as="a" href="/about">
            About
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

import React from "react";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.100" py={10}>
      <Container maxW="container.lg">
        <Stack spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            Particles Marketplace
          </Text>
          <Stack direction="row" align="center">
            <FaMapMarkerAlt />
            <Text>123 Main St, Anytown, USA</Text>
          </Stack>
          <Stack direction="row" align="center">
            <FaPhone />
            <Text>+1 (555) 123-4567</Text>
          </Stack>
          <Stack direction="row" align="center">
            <FaEnvelope />
            <Text>info@particlesmarketplace.com</Text>
          </Stack>
          <Text>&copy; 2024 Particles Marketplace. All rights reserved.</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            About Particles Marketplace
          </Heading>
          <Text fontSize="xl">Particles Marketplace is a platform that connects businesses with top software talent specializing in modern web technologies. Our mission is to streamline the process of finding and hiring the right developers for your projects.</Text>
          <Text fontSize="xl">With a curated list of skilled professionals from around the world, we make it easy to discover and connect with the expertise you need. Whether you're looking for developers proficient in React, Node.js, .NET, Go, or JavaScript, Particles Marketplace has you covered.</Text>
          <Text fontSize="xl">We believe in fostering a collaborative and efficient hiring process, enabling businesses to find the perfect match for their development needs quickly and effectively. Join Particles Marketplace today and unlock access to a global network of exceptional software talent.</Text>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default About;

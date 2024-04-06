import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Tag, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaSearch, FaEnvelope, FaUser } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const developers = [
  { id: 1, name: "Alice", location: "New York, USA", technologies: ["React", "Node.js", ".NET"] },
  { id: 2, name: "Bob", location: "Berlin, Germany", technologies: ["Go", "JS"] },
  { id: 3, name: "Carol", location: "Paris, France", technologies: ["React", "Node.js"] },
  // ...other developers
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);
  const toast = useToast();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    const filtered = developers.filter((dev) => dev.name.toLowerCase().includes(value.toLowerCase()) || dev.location.toLowerCase().includes(value.toLowerCase()) || dev.technologies.some((tech) => tech.toLowerCase().includes(value.toLowerCase())));
    setFilteredDevelopers(filtered);
  };

  const sendMessage = (developerName) => {
    toast({
      title: `Message sent to ${developerName}`,
      description: "We've sent your message to the developer's inbox.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Navbar />
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">
            Particles Marketplace
          </Heading>
          <Text fontSize="xl">Discover and connect with top software talent specialized in modern web technologies.</Text>

          <Image src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3MTI0MTE4NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development Team" borderRadius="md" objectFit="cover" />

          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            <Input placeholder="Search developers by name, location or technology" value={search} onChange={handleSearchChange} />
          </InputGroup>

          <Flex direction="column" w="full">
            {filteredDevelopers.map((developer) => (
              <Box key={developer.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Flex align="center">
                      <FaUser />
                      <Text ml={2} fontWeight="bold">
                        {developer.name}
                      </Text>
                    </Flex>
                    <Text>{developer.location}</Text>
                    <Stack direction="row" mt={2}>
                      {developer.technologies.map((tech, index) => (
                        <Tag key={index} colorScheme="blue">
                          {tech}
                        </Tag>
                      ))}
                    </Stack>
                  </Box>
                  <Button leftIcon={<FaEnvelope />} colorScheme="teal" onClick={() => sendMessage(developer.name)}>
                    Send Message
                  </Button>
                </Flex>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default Index;

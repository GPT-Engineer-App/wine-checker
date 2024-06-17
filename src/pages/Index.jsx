import { Container, VStack, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [wineData, setWineData] = useState([
    { id: 1, name: "Red Wine", quantity: 10 },
    { id: 2, name: "White Wine", quantity: 5 },
    { id: 3, name: "Rose Wine", quantity: 8 },
  ]);

  const toast = useToast();

  const handleSell = (id) => {
    setWineData((prevData) =>
      prevData.map((wine) =>
        wine.id === id && wine.quantity > 0
          ? { ...wine, quantity: wine.quantity - 1 }
          : wine
      )
    );
    toast({
      title: "Wine sold.",
      description: "You have sold one unit of wine.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} w="100%">
        <Heading as="h1" size="xl">Pension Presier Wine Inventory</Heading>
        <Text fontSize="lg">Check the amount of wine purchased and sell it from the table below.</Text>
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>Wine</Th>
              <Th isNumeric>Quantity</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {wineData.map((wine) => (
              <Tr key={wine.id}>
                <Td>{wine.name}</Td>
                <Td isNumeric>{wine.quantity}</Td>
                <Td>
                  <Button colorScheme="teal" size="sm" onClick={() => handleSell(wine.id)} isDisabled={wine.quantity === 0}>
                    Sell
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
import { Container, VStack, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, useToast, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  const [wineData, setWineData] = useState([
    { id: 1, name: "Red Wine", quantity: 10 },
    { id: 2, name: "White Wine", quantity: 5 },
    { id: 3, name: "Rose Wine", quantity: 8 },
  ]);

  const [cart, setCart] = useState([]);
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

  const handleAddToCart = (wine) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === wine.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === wine.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...wine, quantity: 1 }];
      }
    });
    toast({
      title: "Wine added to cart.",
      description: `${wine.name} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} w="100%">
        <Heading as="h1" size="xl">Pension Presier Wine Inventory</Heading>
        <Image src="/images/red_wine_glass.jpg" alt="Red Wine Glass" boxSize="300px" objectFit="cover" borderRadius="md" />
        <Text fontSize="lg">Check the amount of wine purchased and sell it from the table below.</Text>
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>Wine</Th>
              <Th isNumeric>Quantity</Th>
              <Th>Action</Th>
              <Th>Add to Cart</Th> {/* Add a new column for adding to cart */}
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
                <Td>
                  <Button colorScheme="blue" size="sm" onClick={() => handleAddToCart(wine)}>
                    Add to Cart
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Link to="/cart">
          <Button colorScheme="teal" size="lg">View Cart</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
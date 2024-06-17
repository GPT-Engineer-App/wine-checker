import { Container, VStack, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Red Wine", quantity: 2 },
    { id: 2, name: "White Wine", quantity: 1 },
  ]);

  const toast = useToast();

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast({
      title: "Item removed.",
      description: "You have removed an item from the cart.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} w="100%">
        <Heading as="h1" size="xl">Shopping Cart</Heading>
        <Text fontSize="lg">Review your selected wines and proceed to checkout.</Text>
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>Wine</Th>
              <Th isNumeric>Quantity</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td isNumeric>{item.quantity}</Td>
                <Td>
                  <Button colorScheme="red" size="sm" onClick={() => handleRemove(item.id)}>
                    Remove
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Button colorScheme="teal" size="lg">Proceed to Checkout</Button>
      </VStack>
    </Container>
  );
};

export default Cart;
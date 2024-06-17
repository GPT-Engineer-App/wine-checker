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
      title: "アイテムが削除されました。",
      description: "カートからアイテムを削除しました。",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} w="100%">
        <Heading as="h1" size="xl">ショッピングカート</Heading>
        <Text fontSize="lg">選択したワインを確認し、チェックアウトに進んでください。</Text>
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>ワイン</Th>
              <Th isNumeric>数量</Th>
              <Th>アクション</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td isNumeric>{item.quantity}</Td>
                <Td>
                  <Button colorScheme="red" size="sm" onClick={() => handleRemove(item.id)}>
                    削除
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Button colorScheme="teal" size="lg">チェックアウトに進む</Button>
      </VStack>
    </Container>
  );
};

export default Cart;
import { Container, VStack, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, useToast, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  const [wineData, setWineData] = useState([
    { id: 1, name: "Red Wine", quantity: 10 },
    { id: 2, name: "White Wine", quantity: 5 },
    { id: 3, name: "Rose Wine", quantity: 8 },
  ]);

  const [salesData, setSalesData] = useState([
    { id: 1, name: "Red Wine", sales: 0 },
    { id: 2, name: "White Wine", sales: 0 },
    { id: 3, name: "Rose Wine", sales: 0 },
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
    setSalesData((prevSales) =>
      prevSales.map((wine) =>
        wine.id === id
          ? { ...wine, sales: wine.sales + 1 }
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
        <Heading as="h1" size="xl">ぷれじーる ワイン在庫</Heading>
        <Image src="/images/wine_glass.jpg" alt="赤ワイングラス" boxSize="300px" objectFit="cover" borderRadius="md" />
        <Text fontSize="lg">購入したワインの量を確認し、以下の表から販売してください。</Text>
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>ワイン</Th>
              <Th isNumeric>数量</Th>
              <Th isNumeric>販売数量</Th> {/* Add a new column for sales quantity */}
              <Th>アクション</Th>
              <Th>カートに追加</Th>
            </Tr>
          </Thead>
          <Tbody>
            {wineData.map((wine) => (
              <Tr key={wine.id}>
                <Td>{wine.name}</Td>
                <Td isNumeric>{wine.quantity}</Td>
                <Td isNumeric>{salesData.find((sale) => sale.id === wine.id)?.sales || 0}</Td> {/* Display sales quantity */}
                <Td>
                  <Button colorScheme="teal" size="sm" onClick={() => handleSell(wine.id)} isDisabled={wine.quantity === 0}>
                    販売
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="blue" size="sm" onClick={() => handleAddToCart(wine)}>
                    カートに追加
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Link to="/cart">
          <Button colorScheme="teal" size="lg">カートを見る</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
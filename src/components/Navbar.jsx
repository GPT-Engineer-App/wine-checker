import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link as={RouterLink} to="/" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" colorScheme="whiteAlpha">
              Home
            </Button>
          </Link>
          <Link as={RouterLink} to="/cart" style={{ textDecoration: 'none' }}>
            <Button variant="ghost" colorScheme="whiteAlpha">
              Cart
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
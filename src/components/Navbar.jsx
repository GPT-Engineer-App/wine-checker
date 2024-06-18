import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Heading as="h1" size="lg" color="white">
          Wine Store
        </Heading>
        <Spacer />
        <NavLink to="/" style={{ marginRight: "20px" }}>
          <Link color="white" fontSize="lg">
            Home
          </Link>
        </NavLink>
        <NavLink to="/cart">
          <Link color="white" fontSize="lg">
            Cart
          </Link>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
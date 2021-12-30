import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <Flex
      bg="teal.600"
      py={4}
      px={8}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to="/">
        <Heading color="white">Typellary</Heading>
      </Link>

      <div>
        <SearchForm />
      </div>
    </Flex>
  );
}

import { Flex } from "@chakra-ui/react";
import BookSearch from "./components/BookSearch";

function App() {
  return (
    <Flex flexDirection={"column"}>
      <BookSearch />
    </Flex>
  );
}

export default App;

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Button,
  Flex,
  Input,
  FormErrorMessage,
  FormLabel,
  FormControl,
  List,
  ListItem,
  Text,
  Link,
  Box,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

import "./BookSearch.css";

const apiKey = "AIzaSyCIxIIcpTwWrV5HmCj_q4AWZRAqD7y6CFI";
const apiURL = "https://www.googleapis.com/books/v1/volumes?q=";

function BookSearch() {
  const [search, setSearch] = useState("");
  const [foundBooks, setFoundBooks] = useState([]);

  function handleCheck(value) {
    if (value === !undefined) {
      return value;
    } else {
      return "";
    }
  }

  function handleClick(e) {
    e.preventDefault();
    axios
      .get(apiURL + search + "&max-results=40&key=" + apiKey)
      .then((data) => {
        const books = data.data.items;
        setFoundBooks(books);
      });
  }

  return (
    <div className="container">
      <Flex className="flex-container" flexDirection="column">
        <Heading>Book search API</Heading>
        <Flex flexDirection={"row"} className="input-field">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Write a book title..."
            size="md"
          />
          <Button colorScheme="blue" variant="solid" onClick={handleClick}>
            Submit
          </Button>
        </Flex>
        <div className="book-list">
          {foundBooks !== undefined ? (
            foundBooks.map((book, i) => (
              <Box
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={i}
                className="book"
              >
                <Box p="6">
                  <Text fontWeight={"black"}>{book.volumeInfo.title}</Text>
                  <Text className="author" fontWeight={"bold"}>
                    {book.volumeInfo.authors}
                  </Text>
                  <Link href={book.volumeInfo.previewLink}>
                    {
                      <img
                        src={
                          book.volumeInfo.imageLinks === undefined
                            ? "./error.png"
                            : `${book.volumeInfo.imageLinks.thumbnail}`
                        }
                        alt={book.title}
                        className="image"
                      />
                    }
                  </Link>
                </Box>
              </Box>
            ))
          ) : (
            <Text>Not found</Text>
          )}
        </div>
      </Flex>
    </div>
  );
}

export default BookSearch;

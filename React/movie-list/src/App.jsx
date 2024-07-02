import BookList from "./components/BookList";

function App() {
  const books = {
    potter: {
      name: "Harry Potter",
      pages: "500",
      author: "J.K Rowling",
    },
    lotr: {
      name: "Lord of the Rings",
      pages: "1000",
      author: "Tolkien",
    },
  };

  return <BookList books={books} title="My Books"/>;
}

export default App;

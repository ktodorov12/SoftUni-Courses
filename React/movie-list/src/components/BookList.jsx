import BookListItem from "./BookListItem";

export default function BookList(props) {
  return (
    <>
      <h1>{props.title}</h1>

      <ul>
         <BookListItem book={props.books.potter}/>
         <BookListItem book={props.books.lotr}/>
      </ul>
    </>
  );
}

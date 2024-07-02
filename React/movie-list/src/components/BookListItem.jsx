export default function BookListItem(props) {
  return (
    <li>
      <div>Book Name: {props.book.name}</div>
      <div>Book Pages: {props.book.pages}</div>
      <div>Book Author: {props.book.author}</div>
    </li>
  );
}

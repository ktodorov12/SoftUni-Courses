import SearchBar from "./SearchBar";
import Table from "./Table";
import AddUserButton from "./AddUserButton";
import Pagination from "./Pagination";

export default function UserCardContainer() {
  return (
    <>
      <section className="card users-container">
        <SearchBar />

        <Table />

        <AddUserButton />

        <Pagination />
      </section>
    </>
  );
}

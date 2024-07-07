import SearchBar from "./SearchBar";
import Table from "./Table";
import AddUserButton from "./AddUserButton";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

export default function UserCardContainer() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async function () {
      setUsers(Object.values(await getAllUsers()));
      setIsLoading(false);
    })();
  }, []);
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

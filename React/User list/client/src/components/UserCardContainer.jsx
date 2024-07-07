import SearchBar from "./SearchBar";
import Table from "./Table";
import AddUserButton from "./AddUserButton";
import Pagination from "./Pagination";
import CreateEditForm from "./CreateEditForm";
import { useEffect, useState } from "react";

export default function UserCardContainer() {
  const [users, setUsers] = useState([]);
  const [createClicked, setCreateClicked] = useState(false);
  useEffect(() => {
    (async function () {
      setUsers(Object.values(await getAllUsers()));
      setIsLoading(false);
    })();
  }, []);

  async function handleCreate(data) {
    const createdUser = await createUser(data);

    setUsers([...users, createdUser]);
    setCreateClicked(false);
    setIsLoading(false);
  }
  return (
    <>
      <section className="card users-container">
        <SearchBar />
        {createClicked && <CreateEditForm onCloseCreate={() => setCreateClicked(false)} onCreateUser={handleCreate} />}

        <Table />

        <AddUserButton />
        <AddUserButton onCreateClick={() => setCreateClicked(true)} />

        <Pagination />
      </section>
    </>
  );
}

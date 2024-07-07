import SearchBar from "./SearchBar";
import Table from "./Table";
import AddUserButton from "./AddUserButton";
import Pagination from "./Pagination";
import CreateEditForm from "./CreateEditForm";
import UserDetails from "./UserDetails";
import { useEffect, useState } from "react";

export default function UserCardContainer() {
  const [users, setUsers] = useState([]);
  const [createClicked, setCreateClicked] = useState(false);

  const [userDetails, setUserDetails] = useState(null);
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
        {userDetails && <UserDetails user={userDetails} onCloseDetails={() => setUserDetails(null)} />}

        <AddUserButton />
        <AddUserButton onCreateClick={() => setCreateClicked(true)} />

        <Pagination />
      </section>
    </>
  );
}

import SearchBar from "./SearchBar";
import Table from "./Table";
import AddUserButton from "./AddUserButton";
import Pagination from "./Pagination";
import CreateEditForm from "./CreateEditForm";
import UserDetails from "./UserDetails";
import DeleteUser from "./DeleteUser";

import { useEffect, useState } from "react";
import { createUser, deleteUser, editUser, getAllUsers } from "../data/data";

export default function UserCardContainer() {
  const [users, setUsers] = useState([]);
  const [createClicked, setCreateClicked] = useState(false);

  const [userDetails, setUserDetails] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
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

  async function handleDelete(e) {
    setIsLoading(true);
    e.preventDefault();

    await deleteUser(deleteUserId);
    setUsers(users.filter((u) => u._id !== deleteUserId));
    setDeleteUserId(null);
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
        {deleteUserId && <DeleteUser onDeleteUser={handleDelete} onClose={() => setDeleteUserId(null)} />}

          users={users}
          onDelete={(userId) => setDeleteUserId(userId)}
        <AddUserButton onCreateClick={() => setCreateClicked(true)} />

        <Pagination />
      </section>
    </>
  );
}

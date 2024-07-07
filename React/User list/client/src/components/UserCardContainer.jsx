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
  const [editUserId, setEditUserId] = useState(null);
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

  async function handleEdit(data) {
    setIsLoading(true);
    const userForEdit = users.find((u) => u._id == editUserId);

    const final = Object.entries(data).map(([k, v]) => {
      if (!v) {
        v = userForEdit[k] || userForEdit.address[k];
      }

      return [k, v];
    });

    const body = {
      ...Object.fromEntries(final),
      createdAt: userForEdit.createdAt,
    };

    const editedUser = await editUser(body, editUserId);
    const newUsers = users.slice();
    newUsers.splice(users.indexOf(userForEdit), 1, editedUser);

    setUsers(newUsers);
    setEditUserId(null);
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
        {editUserId && <CreateEditForm onCloseCreate={() => setEditUserId(null)} onCreateUser={handleEdit} />}

        {userDetails && <UserDetails user={userDetails} onCloseDetails={() => setUserDetails(null)} />}

        <AddUserButton />
        {deleteUserId && <DeleteUser onDeleteUser={handleDelete} onClose={() => setDeleteUserId(null)} />}

        <Table
          users={users}
          onDetails={(userId) => setUserDetails(userId)}
          onEdit={(userId) => setEditUserId(userId)}
          onDelete={(userId) => setDeleteUserId(userId)}
        />

        <AddUserButton onCreateClick={() => setCreateClicked(true)} />

        <Pagination />
      </section>
    </>
  );
}

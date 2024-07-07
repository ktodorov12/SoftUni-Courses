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

  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async function () {
      setUsers(Object.values(await getAllUsers()));
      setIsLoading(false);
    })();
  }, []);

  async function handleCreate(data) {
    setIsLoading(true);
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

  async function handleSearch({ search, criteria }) {
    if (criteria === "empty" || !search) {
      const { origin } = window.location;
      window.history.pushState({ path: origin }, "", origin);
      setUsers(Object.values(await getAllUsers()));
      return;
    }

    const url = `?search=${search}&criteria=${criteria}`;
    window.history.pushState({ path: url }, "", url);

    const filteredUsers = users.filter((u) => u[criteria].toLowerCase().includes(search.toLowerCase()));
    setUsers(filteredUsers);
    setSearchQuery(search);
  }

  async function handleClearSearch(e) {
    e.preventDefault();

    const { origin } = window.location;
    window.history.pushState({ path: origin }, "", origin);
    setUsers(Object.values(await getAllUsers()));
    setSearchQuery("");
  }

  return (
    <>
      <section className="card users-container">
        <SearchBar onSearch={handleSearch} onClear={handleClearSearch} hasSearch={searchQuery}/>

        {createClicked && <CreateEditForm onCloseCreate={() => setCreateClicked(false)} onCreateUser={handleCreate} />}

        {editUserId && <CreateEditForm onCloseCreate={() => setEditUserId(null)} onCreateUser={handleEdit} />}

        {userDetails && <UserDetails user={userDetails} onCloseDetails={() => setUserDetails(null)} />}

        {deleteUserId && <DeleteUser onDeleteUser={handleDelete} onClose={() => setDeleteUserId(null)} />}

        <Table
          users={users}
          onDetails={(userId) => setUserDetails(userId)}
          onEdit={(userId) => setEditUserId(userId)}
          onDelete={(userId) => setDeleteUserId(userId)}
          isLoading={isLoading}
        />

        <AddUserButton onCreateClick={() => setCreateClicked(true)} />

        <Pagination />
      </section>
    </>
  );
}

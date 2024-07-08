import SearchBar from "./SearchBar";
import Table from "./Table";
import AddUserButton from "./AddUserButton";
import Pagination from "./Pagination";
import CreateEditForm from "./CreateEditForm";
import UserDetails from "./UserDetails";
import DeleteUser from "./DeleteUser";

import { useCallback, useEffect, useState } from "react";
import { createUser, deleteUser, editUser, getAllUsers } from "../data/data";

export default function UserCardContainer() {
  const [users, setUsers] = useState([]);
  const [createClicked, setCreateClicked] = useState(false);

  const [userDetails, setUserDetails] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [allPages, setAllPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  let pagStart = (currentPage - 1) * itemsPerPage;

  const renderUsers = useCallback(async (currUsers) => {
    setUsers(currUsers.slice(pagStart, itemsPerPage * pagStart || itemsPerPage));
    setIsLoading(false);
    setAllPages(Math.ceil(currUsers.length / itemsPerPage));
  }, [pagStart, itemsPerPage]);

  useEffect(() => {
    (async function() {
      await renderUsers(Object.values(await getAllUsers()));
    })();
  }, [renderUsers]);


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
      renderUsers(Object.values(await getAllUsers()));
      return;
    }

    const url = `?search=${search}&criteria=${criteria}`;
    window.history.pushState({ path: url }, "", url);

    const allUsers = Object.values(await getAllUsers());
    console.log(allUsers);
    const filteredUsers = allUsers.filter((u) => u[criteria].toLowerCase().includes(search.toLowerCase()));
    renderUsers(filteredUsers);
    setSearchQuery(search);
  }

  async function handleClearSearch(e) {
    e.preventDefault();

    const { origin } = window.location;
    window.history.pushState({ path: origin }, "", origin);
    renderUsers(Object.values(await getAllUsers()));
    setSearchQuery("");
  }

  function handleItemsPerPage(e) {
    const value = Number(e.target.value);
    setItemsPerPage(value);
  }

  return (
    <>
      <section className="card users-container">
        <SearchBar onSearch={handleSearch} onClear={handleClearSearch} hasSearch={searchQuery} />

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

        <Pagination 
          onSetItems={handleItemsPerPage} 
          currentPage={currentPage} 
          allPages={allPages}
          pageUp={() => setCurrentPage(currentPage + 1)}
          pageDown={() => setCurrentPage(currentPage - 1)}
          firstPage={() => setCurrentPage(1)}
          lastPage={() => setCurrentPage(allPages)}
        />
      </section>
    </>
  );
}

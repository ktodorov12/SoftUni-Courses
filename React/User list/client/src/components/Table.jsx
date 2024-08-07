import Errors from "./Errors";
import Spinner from "./Spinner";
import TableRow from "./TableRow";

export default function Table({ 
  users, 
  onDetails, 
  onEdit, 
  onDelete, 
  isLoading,
  onSort,
  sorter,
  error
}) {
  return (
    <>
      <div className="table-wrapper">
        {isLoading && <Spinner />}
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={onSort}>
                First name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className={`icon ${sorter == "firstName" && "active-icon"} svg-inline--fa fa-arrow-down Table_icon__+HHgn`}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
                </svg>
              </th>
              <th onClick={onSort}>
                Last name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className={`icon ${sorter == "lastName" && "active-icon"} svg-inline--fa fa-arrow-down Table_icon__+HHgn`}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
                </svg>
              </th>
              <th onClick={onSort}>
                Email
                <svg
                  className={`icon ${sorter == "email" && "active-icon"} svg-inline--fa fa-arrow-down Table_icon__+HHgn`}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
                </svg>
              </th>
              <th onClick={onSort}>
                Phone
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className={`icon ${sorter == "phoneNumber" && "active-icon"} svg-inline--fa fa-arrow-down Table_icon__+HHgn`}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
                </svg>
              </th>
              <th onClick={onSort}>
                Created
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className={`icon ${sorter == "createdAt" && "active-icon"} svg-inline--fa fa-arrow-down Table_icon__+HHgn`}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Table row component --> */}
            {error 
              ? <td><Errors errorText={error}/></td>
              : users.map((u) => (
              <TableRow 
              key={u._id}
              user={u}
              onDetails={onDetails}
              onDelete={onDelete}
              onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

export default function UserssList({ data }) {
  const handleDelete = (id) => {
    console.log("deleting soon...");
  };

  const columns = [
    {
      field: "id",
      headerName: "S/NO",
      width: 50,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "isAdmin",
      headerName: "Role",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {params.row.isAdmin ? (
              <h6 className='alert alert-warning role'>Admin</h6>
            ) : (
              <h6 className='alert alert-success role'>User</h6>
            )}
          </>
        );
      },
    },
    {
      field: "date",
      headerName: "Joined",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='alert alert-info role'>
            {moment(params.row.createdAt).format("MMM Do YY")}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <div>
            <h6>Delete</h6>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className='userList'>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={4}
          checkboxSelection
        />
      </div>
    </>
  );
}

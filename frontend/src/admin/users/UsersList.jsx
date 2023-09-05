import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

export default function UserssList({ data }) {
  const handleDelete = (id) => {
    console.log("deleting soon...");
  };

  const columns = [
    {
      field: "id",
      headerName: "S/NO",
      width: 10,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "date",
      headerName: "Joined",
      width: 150,
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

import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

export default function UserssList({ data }) {
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
              <h6 className='rounded h-12 text-green-500 border rounded-full p-4 role'>
                Admin
              </h6>
            ) : (
              <h6 className='rounded h-12 text-orange-500 border rounded-full p-4 role'>
                User
              </h6>
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
          // checkboxSelection
          showColumnVerticalBorder
          showCellVerticalBorder
        />
      </div>
    </>
  );
}

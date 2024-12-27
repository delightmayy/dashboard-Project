import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dbData } from "../Data/mockData";
import useDarkMode from "../Api/useDarkMode";
import useWindowSize from "../Api/useWindowSize";
import HeadTitle from "../assets/HeadTitle";

const Contact = () => {
  const { mode } = useDarkMode();
  const { width } = useWindowSize();

  const colums = [
    {
      field: "id",
      headerName: "S/N",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "postId",
      headerName: "Group",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "body",
      headerName: "Details",
      flex: 2,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "UserEmail",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
  ];
  return (
    <div className="  dark:bg-gray-500 text-back  overflow-x-auto scrollbar-thin dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-500 scrollbar-thumb-gray-600 p-1 ">
      <HeadTitle
        Title={"Contact"}
        subTitle={"word of information at your tip"}
      />
      <DataGrid
        slots={{ toolbar: width >= 768 && GridToolbar }}
        rows={dbData}
        columns={colums}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: mode ? 1 : 1,
          borderColor: "#111827",
          "& .MuiDataGrid-cell": {
            color: mode ? "aliceblue" : "#27272a",
          },
          "& .MuiDataGrid-cell:hover": {
            color: "red",
          },
          "& .super-app-theme--header": {
            backgroundColor: mode ? "#4b5563" : "#6b7280",
            color: mode ? "aliceblue" : "#27272a",
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: mode ? " #9ca3af" : " #e5e7eb",
          },
          "& .MuiDataGrid-root ": {
            color: mode ? "aliceblue" : "#27272a",
          },
          "& .MuiDataGrid-sortIcon ": {
            color: mode ? "aliceblue" : "#27272a",
          },
          "& .MuiIconButton-root ": {
            color: mode ? "aliceblue" : "#27272a",
          },
          "& .MuiButtonBase-root ": {
            color: mode ? "aliceblue" : "#27272a",
          },
          "& .MuiButtonBase-root:hover ": {
            color: "red",
          },
          "& .Mui-checked ": {
            color: mode ? "aliceblue" : "#27272a",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            color: mode ? "aliceblue" : "#27272a",
            backgroundColor: mode ? "#4b5563" : "#6b7280",
          },
          "& .MuiTablePagination-toolbar ": {
            color: mode ? "aliceblue" : "#27272a",
            backgroundColor: mode ? "aliceblue" : "#6b7280",
          },
        }}
      />
    </div>
  );
};
export default Contact;

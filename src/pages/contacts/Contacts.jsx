import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";

export default function Contacts() {
  return (
    <div>
      <Box sx={{ height: "auto", width: "98%", mx: "auto" }}>
        <DataGrid
        slots={{ toolbar: GridToolbar }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </div>
  );
}

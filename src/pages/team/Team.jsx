import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { red } from "@mui/material/colors";

const Team = () => {
  const theme = useTheme();
  const columns = [
    // field required
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              borderRadius: "5px",
              width: "100px",
              mx: "auto",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              mt:"10px",
              color: "#fff",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon sx={{fontSize:"15px", color: "#fff"}} />
            ) : access === "Manager" ? (
              <SecurityOutlinedIcon sx={{fontSize:"15px", color: "#fff"}}/>
            ) : (
              <LockOpenOutlinedIcon sx={{fontSize:"15px", color: "#fff"}}/>
            )}
            <Typography sx={{fontSize: "13px"}}> {access} </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <Box sx={{ height: "auto", width: "98%", mx: "auto"}}>
        <DataGrid
        checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </div>
  );
};
export default Team;

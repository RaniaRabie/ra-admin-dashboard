import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regNumber = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
const role = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("doneeeee");
    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={"row"}>
        {/* FirstName */}

        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          // 50-56=> for validation
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "This Field is required & min 3 characters"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
        />

        {/* LastName */}

        <TextField
          // next lines for validation
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "This Field is required & min 3 characters" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      {/* Email */}

      <TextField // next lines for validation
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.phone)}
        helperText={errors.phone ? "please provide a valid phone Number" : null}
        {...register("phone", { required: true, pattern: regNumber })}
        label="Contact Number"
        variant="filled"
      />

      <TextField label="Address 1 " variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="role"
        defaultValue="User"
      >
        {role.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}



































// <Box
// component="form"
// sx={{
//   "& > :not(style)": { m: 1, width: "30ch" },
// }}
// noValidate
// autoComplete="off"
// >

//   <TextField id="filled-basic" label="Name" variant="filled" />
//   <TextField
//     id="filled-basic"
//     label="UserName"
//     variant="filled"
//   />
// <Stack>
//   <TextField id="filled-basic" label="Email" variant="filled" fullWidth />
// </Stack>

// <FormControl fullWidth>
//   <InputLabel id="demo-simple-select-label" >Country</InputLabel>
//   <Select
//   variant="filled"
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value={country}
//     label="country"
//     onChange={handleChange}
//   >
//     <MenuItem value={10}>Egypt</MenuItem>
//     <MenuItem value={20}>USA</MenuItem>
//     <MenuItem value={30}>UK</MenuItem>
//   </Select>
// </FormControl>

// <FormControl fullWidth>
//   <InputLabel id="demo-simple-select-label" variant="filled">City</InputLabel>
//   <Select
//   variant="filled"
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value={city}
//     label="city"
//     onChange={handleChange}
//   >
//     <MenuItem value={10}>Cairo</MenuItem>
//     <MenuItem value={20}>Fayoum</MenuItem>
//     <MenuItem value={30}>Giza</MenuItem>
//   </Select>
// </FormControl>
//   <br />

//   <TextField id="filled-basic" label="Phone" variant="filled" />

//   <TextField
//     id="outlined-number"
//     label="Age"
//     type="number"
//     variant="filled"
//     InputLabelProps={{
//       shrink: true,
//     }}
    
//   />
// <br />
// <TextField id="filled-basic" label="Password" variant="filled" />
// <TextField
//   id="filled-basic"
//   label="Confirm Password"
//   variant="filled"
// />
// </Box>
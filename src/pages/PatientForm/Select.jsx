import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ onGenderChange, oldData }) {
  const [gender, setGender] = React.useState("");

  React.useEffect(() => {
    setGender(oldData);
  }, [oldData]);

  const handleChange = async (event) => {
    await onGenderChange(event.target.value);
    setGender(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={0}>Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

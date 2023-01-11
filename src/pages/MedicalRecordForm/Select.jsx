import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ onSeverityChange, oldData }) {
  const [severity, setSeverity] = React.useState("");

  React.useEffect(() => {
    setSeverity(oldData);
  }, [oldData]);

  const handleChange = async (event) => {
    await onSeverityChange(event.target.value);
    setSeverity(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Severity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={severity}
          label="Severity"
          onChange={handleChange}
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Moderate</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

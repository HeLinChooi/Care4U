import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import user1 from "@Assets/user1.jpg";
import user2 from "@Assets/user2.jpg";
import user3 from "@Assets/user3.jpg";
import user4 from "@Assets/user4.jpg";
import user5 from "@Assets/user5.jpg";
import { useTheme } from "@mui/material/styles";

function createData(userProfilePic, name, calories, fat, carbs, protein) {
  return { userProfilePic, name, calories, fat, carbs, protein };
}

const rows = [
  createData(user1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(user2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(user3, "Eclair", 262, 16.0, 24, 6.0),
  createData(user4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(user5, "Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable({ title }) {
  const theme = useTheme();
  return (
    <>
      <Grid container justifyContent="space-between" sx={{ p: 1 }}>
        <Grid sx={{ fontWeight: "bold" }}>{title}</Grid>
        <Link to="/" style={{ textDecoration: "none" }}>
          View More
        </Link>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Accessor</TableCell>
              <TableCell>NFT Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Reason</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: theme.palette.grey["100"] },
                }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.userProfilePic}
                    alt={"user"}
                    height="30px"
                    width="30px"
                    style={{ borderRadius: "50%" }}
                  ></img>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

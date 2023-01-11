import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BasicBreadcrumbs(props) {
  const { list = [], currentDirectory = "" } = props;
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {list.map((item, idx) => (
          <Link underline="hover" color="inherit" href={item.link} key={idx}>
            {item.label}
          </Link>
        ))}
        <Typography color="text.primary">{currentDirectory}</Typography>
      </Breadcrumbs>
    </div>
  );
}

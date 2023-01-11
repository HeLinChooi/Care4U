import { Box } from "@mui/material";
import anime from "animejs";
import React, { useEffect, useState } from "react";
import styles from "../utils/Swagger.module.scss";

const Tiles = () => {
  const [toggle, setToggle] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  const toggleOpacity = () => {
    const toggled = !toggle;
    setToggle(toggled);
  };

  const handleOnClick = (index) => {
    anime({
      targets: ".Swagger_tile__45Zk7",
      opacity: toggle ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
    toggleOpacity();
  };
  const createGrid = () => {
    const size = document.body.clientWidth > 800 ? 50 : 50;

    setColumns(Math.floor(document.body.clientWidth / size));
    setRows(Math.floor(document.body.clientHeight / size));
    setQuantity(columns * rows);
  };

  useEffect(() => {
    createGrid();
    window.onresize = () => createGrid();
  }, []);

  return (
    <>
      <Box
        id={styles.tiles}
        sx={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {Array.from(Array(quantity)).map((tile, index) => {
          return (
            <Box
              className={styles.tile}
              onClick={() => handleOnClick(index)}
              key={index}
            ></Box>
          );
        })}
      </Box>
    </>
  );
};

export default Tiles;

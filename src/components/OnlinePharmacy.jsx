// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import panadol from "@Assets/panadol.jpg";
import cotton from "@Assets/cotton.jpg";
import cough from "@Assets/cough.jpg";
import plaster from "@Assets/hansaplast.jfif";
import koolfever from "@Assets/koolfever.jpg";
import { styled, alpha } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import DirectionsIcon from "@mui/icons-material/Directions";
import CallIcon from "@mui/icons-material/Call";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbars() {
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

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
    </Stack>
  );
}

export default () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  var slides = 5;

  if (isXl) {
    slides = 5.2;
  } else if (isLg) {
    slides = 4.2;
  } else if (isMd) {
    slides = 3.2;
  } else if (isSm) {
    slides = 2.2;
  } else if (isXs) {
    slides = 1.2;
  }

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={slides}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ActionAreaCard1></ActionAreaCard1>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard2></ActionAreaCard2>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard3></ActionAreaCard3>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard4></ActionAreaCard4>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard5></ActionAreaCard5>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard1></ActionAreaCard1>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard2></ActionAreaCard2>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard3></ActionAreaCard3>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard4></ActionAreaCard4>
      </SwiperSlide>
      <SwiperSlide>
        <ActionAreaCard5></ActionAreaCard5>
      </SwiperSlide>
    </Swiper>
  );
};

const StyledChip = styled(Chip)(() => ({
  backgroundColor: "darkOrange",
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  top: "5px",
  right: "5px",
}));

const addToCart = () => {};

export function ActionAreaCard1() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardActionArea>
        <StyledChip label="Newly Arrived" size="small"></StyledChip>
        <CardMedia component="img" height="200" image={panadol} alt="panadol" />
        <hr></hr>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Panadol Extra 65mg Soluble
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            With a dual formulation that fights tough pains such as headaches,
            dental pain and menstrual pain
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <Button variant="contained" onClick={addToCart()}>
              Add to cart &nbsp;
              <AddShoppingCartIcon />
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard2() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardActionArea>
        <StyledChip label="Newly Arrived" size="small"></StyledChip>
        <CardMedia component="img" height="200" image={cotton} alt="panadol" />
        <hr></hr>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Honeywell Sterile Cotton Balls
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Soft, absorbent 1" cotton balls of high-grade fiber remain strong
            when saturated. Ideal for cleaning wounds
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <Button variant="contained" onClick={addToCart()}>
              Add to cart &nbsp;
              <AddShoppingCartIcon />
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard3() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardActionArea>
        <StyledChip label="Newly Arrived" size="small"></StyledChip>
        <CardMedia component="img" height="200" image={cough} alt="panadol" />
        <hr></hr>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Vicks Cough Syrup Dry
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Vicks Cough Syrup Dry + Chesty is formulated to provide 2 in 1
            relief. It helps to relieve both: Dry Cough Chesty Cough
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <Button variant="contained" onClick={addToCart()}>
              Add to cart &nbsp;
              <AddShoppingCartIcon />
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard4() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardActionArea>
        <StyledChip label="Newly Arrived" size="small"></StyledChip>
        <CardMedia
          component="img"
          height="200"
          image={koolfever}
          alt="panadol"
        />
        <hr></hr>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            KoolFever Cooling Pad
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Ready to use by any family member that has fever. Chill the PILLOW
            in the freezer with -20°C for overnight
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <Button variant="contained" onClick={addToCart()}>
              Add to cart &nbsp;
              <AddShoppingCartIcon />
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard5() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardActionArea>
        <StyledChip label="Newly Arrived" size="small"></StyledChip>
        <CardMedia component="img" height="200" image={plaster} alt="panadol" />
        <hr></hr>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Hansaplast Kids Plaster
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Scrapes, cuts and grazes will be forgotten in a flurry of snowflakes
            with these cool plasters featuring their favorite characters
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <Button variant="contained" onClick={addToCart()}>
              Add to cart &nbsp;
              <AddShoppingCartIcon />
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

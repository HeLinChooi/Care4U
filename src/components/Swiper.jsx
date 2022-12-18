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
import clinic1 from "@Assets/clinic1.jpg";
import clinic2 from "@Assets/clinic2.jpg";
import clinic3 from "@Assets/clinic3.jpg";
import clinic4 from "@Assets/clinic4.png";
import clinic5 from "@Assets/clinic5.jpg";
import { styled, alpha } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import DirectionsIcon from "@mui/icons-material/Directions";
import CallIcon from "@mui/icons-material/Call";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  backgroundColor: "crimson",
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  top: "5px",
  right: "5px",
}));

const StyledChipGreen = styled(Chip)(() => ({
  backgroundColor: "limeGreen",
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  top: "5px",
  right: "5px",
}));

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
        <StyledChipGreen label="open" size="small"></StyledChipGreen>
        <CardMedia component="img" height="150" image={clinic1} alt="clinic" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Wellness Clinic
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Jalan USJ 9/5s, SBC
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <ButtonGroup disableElevation variant="contained">
              <Button>
                <DirectionsIcon />
              </Button>
              <Button>
                <CallIcon />
              </Button>
            </ButtonGroup>
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
        <StyledChipGreen label="open" size="small"></StyledChipGreen>
        <CardMedia component="img" height="150" image={clinic2} alt="clinic" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Klinik Wanita Metro SS15
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            36, Jalan SS 15/4d, Ss 15
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <ButtonGroup disableElevation variant="contained">
              <Button>
                <DirectionsIcon />
              </Button>
              <Button>
                <CallIcon />
              </Button>
            </ButtonGroup>
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
        <StyledChip label="closed" size="small"></StyledChip>
        <CardMedia component="img" height="150" image={clinic3} alt="clinic" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Klinik Central
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            No. 11-G, Jalan SS 15/8a, Ss 15
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <ButtonGroup disableElevation variant="contained">
              <Button>
                <DirectionsIcon />
              </Button>
              <Button>
                <CallIcon />
              </Button>
            </ButtonGroup>
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
        <StyledChipGreen label="open" size="small"></StyledChipGreen>
        <CardMedia component="img" height="150" image={clinic4} alt="clinic" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Klinik Sri Subang
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            9, Jalan PJS 7/22, Bandar Sunway
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <ButtonGroup disableElevation variant="contained">
              <Button>
                <DirectionsIcon />
              </Button>
              <Button>
                <CallIcon />
              </Button>
            </ButtonGroup>
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
        <StyledChipGreen label="open" size="small"></StyledChipGreen>
        <CardMedia component="img" height="150" image={clinic5} alt="clinic" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Klinik Medijaya USJ9
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            30, Jalan USJ 9/5n, SBC
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <ButtonGroup disableElevation variant="contained">
              <Button>
                <DirectionsIcon />
              </Button>
              <Button>
                <CallIcon />
              </Button>
            </ButtonGroup>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

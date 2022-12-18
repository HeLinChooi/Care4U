// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.scss";

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
import clinic from "@Assets/clinic.jpg";
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
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <SwiperSlide>
          <ActionAreaCard></ActionAreaCard>
        </SwiperSlide>
      ))}
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

export function ActionAreaCard() {
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
        <CardMedia component="img" height="150" image={clinic} alt="clinic" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Wellness Clinic
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Opens 8:30AM Mon
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            Jalan USJ 9/5s · In QHC Medical Centre · 011-5110 6224
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

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment className="card-container">
//     <CardContent>
//       <img className="img-container" src={clinic} alt="clinic" />
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Alert, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CreateAccessNFTModal({
  open,
  handleClose,
  information,
}) {
  function sendTransaction() {}
  let formData;
  //   const [open, setOpen] = React.useState(false);
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";

    console.log(formData);
    // if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction()
      .then(() => handleClose())
      .catch(() => handleClose());
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Mint Medical Report Access Token
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Alert severity="info" sx={{ mb: 2 }}>
            You need to mint an NFT for the researcher to access your medical
            record.
          </Alert>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} md={4} sx={{ height: "100%" }}>
              <img
                style={{ maxHeight: "250px", width: "100%" }}
                src="https://images.pexels.com/photos/7578815/pexels-photo-7578815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="report"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body2">Report Name:</Typography>
              <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                Leukaemia Report
              </Typography>

              <Typography>Research:</Typography>
              <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                Molecular Profiling & Risk Treatment Stratification of Acute
                Promyelocytic Leukaemia
              </Typography>

              <Typography>Researcher:</Typography>
              <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                {"Ermi Neiza binti Mohd Sahid"}
              </Typography>

              <Typography>Blockchain:</Typography>
              <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                {"Ethereum"}
              </Typography>

              <Typography>Rewards:</Typography>
              <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                {"0.0011 ETH"}
              </Typography>
            </Grid>
          </Grid>
          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleSubmit}>
            Mint & Apply
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

import React from "react";
import { useContext } from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

// Smart Contract
import {
  nftaddress,
  nftmarketaddress,
  nftmarketABI,
  nftaddressABI,
} from "../utils/constants";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

const NFTCreation = () => {
  let currentAccount, sendTransaction, formData;
  const navigate = useNavigate();
  const formInput = {
    price: "0.001",
    name: "Lim",
    description: "Create Medical NFT",
  };

  const onSubmit = () => {
    if (!currentAccount) return;
    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0.000016"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";
    sendTransaction()
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        navigate("/");
      });
  };

  async function createMarket() {
    const { name, description, price } = formInput;

    if (!name || !description || !price) return;
    try {
      createSale();
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createSale(url = "") {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      /* next, create the item */
      let contract = new ethers.Contract(nftaddress, nftaddressABI, signer);
      let transaction = await contract.createToken(url);
      let tx = await transaction.wait();
      console.log("tx", tx);
      let event = tx.events[0];
      let value = event.args[2];
      let tokenId = value.toNumber();

      const price = ethers.utils.parseUnits(formInput.price, "ether");

      /* then list the item for sale on the marketplace */
      contract = new ethers.Contract(nftmarketaddress, nftmarketABI, signer);
      let listingPrice = await contract.getListingPrice();
      listingPrice = listingPrice.toString();

      transaction = await contract.createMarketItem(
        nftaddress,
        tokenId,
        price,
        { value: listingPrice }
      );
      await transaction.wait();
      navigate("/");
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  }

  return (
    <PageLayout title={"Create Medical Record NFT"}>
      <Grid container spacing={2}>
        {!currentAccount && (
          <Grid item xs={12} sx={{ m: 2, mb: 0 }}>
            <Alert severity="error">
              Please connect your Metamask wallet to make payment!
            </Alert>
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          {/* <Form onSubmit={onSubmit} /> */}
          <Form onSubmit={createMarket} />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <InfoCard description="The patient has suffered for weeks" /> */}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default NFTCreation;

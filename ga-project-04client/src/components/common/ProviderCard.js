import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { API } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export default function ProviderCard({
  name,
  id,
  policyName,
  productName,
  price,
}) {
  const navigate = useNavigate();
  const onClickBuy = () => {
    if (localStorage.length === 0) {
      window.alert("Please Login or Register To Proceed");
    } else {
      //Need to do a post request here
      API.POST(API.ENDPOINTS.allPolicies, {
        id: "1",
        name: policyName,
        increase_price: Number(price),
        provider: id,
      })
        .then(({ data }) => {
          alert("Insurance Successfully Processed");
          navigate("/insurance");
          console.log(data);
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <Card sx={{ maxWidth: 345, marginTop: "50px" }}>
      <CardActionArea>
        <CardMedia
          component=""
          height="450"
          sx={{ maxHeight: 345, objectFit: "contain" }}
        />
        <CardContent>
          <div
            style={{
              borderRadius: "8px",
              textAlign: "center",
              color: "black",
              fontSize: "20px",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "30px" }}
            >
              {policyName} Cover
            </Typography>
          </div>
          <div
            style={{
              backgroundColor: "rgb(255 176 13)",
              borderRadius: "8px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "20px" }}
            >
              {productName}
            </Typography>
          </div>
          <div
            style={{
              backgroundColor: "rgb(61 123 255)",
              borderRadius: "8px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "20px" }}
            >
              {name}
            </Typography>
          </div>
          <div
            style={{
              backgroundColor: "rgb(255 176 13)",
              borderRadius: "8px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: "20px" }}
            >
              {`£${price}`}
            </Typography>
          </div>
        </CardContent>
        <button
          onClick={onClickBuy}
          style={{
            marginLeft: "20%",
            fontSize: "18px",
            borderRadius: "6px",
            border: "none",
            marginBottom: "10px",
            width: "200px",
            backgroundColor: "#397dd7",
            color: "white",
            cursor: "pointer",
          }}
        >
          BUY
        </button>
      </CardActionArea>
    </Card>
  );
}

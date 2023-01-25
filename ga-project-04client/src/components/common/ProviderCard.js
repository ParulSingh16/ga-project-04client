import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function ProviderCard({ name, id, policyName, productName }) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "50px" }}>
      <CardActionArea>
        <CardMedia
          // component="img"
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
              {policyName}
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
              {`£${(Math.random(50, 100) * 100).toFixed(0)}`}
            </Typography>
          </div>
        </CardContent>
        <button
          style={{
            marginLeft: "20%",
            fontSize: "18px",
            borderRadius: "6px",
            border: "none",
            marginBottom: "10px",
            width: "200px",
            backgroundColor: "#397dd7",
            color: "white",
          }}
        >
          BUY
        </button>
      </CardActionArea>
    </Card>
  );
}

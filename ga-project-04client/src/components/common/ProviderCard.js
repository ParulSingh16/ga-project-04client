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
          <Typography gutterBottom variant="h5" component="div">
            {policyName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`£${(Math.random(50, 100) * 100).toFixed(0)}`}
          </Typography>
        </CardContent>
        <button style={{ marginLeft: "40%", marginBottom: "10px" }}>BUY</button>
      </CardActionArea>
    </Card>
  );
}

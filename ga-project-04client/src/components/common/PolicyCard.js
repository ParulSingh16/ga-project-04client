import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import Repair from "../../assets/repair.png";

export default function PolicyCard({ name, onClick, imageName }) {
  const cardClicked = () => {
    onClick(name);
  };
  return (
    <Card sx={{ maxWidth: 345 }} onClick={cardClicked}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={Repair}
          sx={{ maxHeight: 345, objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

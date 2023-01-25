import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function PolicyCard({ name, onClick }) {
  const cardClicked = () => {
    onClick(name);
  };
  return (
    <Card sx={{ maxWidth: 345 }} onClick={cardClicked}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          sx={{ maxHeight: 345, objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

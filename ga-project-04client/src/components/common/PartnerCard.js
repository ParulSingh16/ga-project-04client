import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PartnerCard({ name, id }) {
  const navigate = useNavigate();
  const navigateToPartner = () => navigate(`/partners/${id}`);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={navigateToPartner}>
        <CardMedia
          component="img"
          height="450"
          alt="name"
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

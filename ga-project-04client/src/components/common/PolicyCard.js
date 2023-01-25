import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import Repair from "../../assets/repair.png";
import Theft from "../../assets/theft.png";
import Happy from "../../assets/happy.png";
import Damage from "../../assets/damage.png";

const getImageName = (policyName) => {
  if (policyName === "Repair Cover") return Repair;
  if (policyName === "Theft Cover") return Theft;
  if (policyName === "Damage Cover") return Damage;
  if (policyName === "Happy Policy") return Happy;
};
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
          image={getImageName(name)}
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

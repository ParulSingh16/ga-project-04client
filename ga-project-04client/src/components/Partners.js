import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API } from "../lib/api";
import { useAuthenticated } from "../hooks/useAuthenticated";

import {
  Container,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import "../styles/Partner.scss";

const Partners = () => {
  const [isLoggedIn] = useAuthenticated();
  const navigate = useNavigate();
  const { id } = useParams();
  const [Partners, setPartners] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.partner(id))
      .then(({ data }) => {
        setPartners(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
    setIsUpdated(false);
  }, [id, isUpdated]);

  const goToIndex = () => navigate("/partners");

  return (
    <>
      <Container maxWidth="lg" sx={{ display: "flex" }} className="Partners">
        <Box>
          {/* <img src={singleBeer?.image} alt={singleBeer?.name} /> */}
        </Box>
        <Box>
          <CardContent>
            <Typography variant="h5" component="p">
              {Partners?.name}
            </Typography>
            <Typography color="text.secondary">
              {Partners?.name}% ABV
            </Typography>
            {Partners?.code?.name && (
              <Typography color="text.secondary"></Typography>
            )}
          </CardContent>
          <CardActions>
            {isLoggedIn(
              <Link to={`/partners/${Partners?._id}`}>
                <Button size="small">Pick your partner</Button>
              </Link>
            )}
            <Button size="small" onClick={goToIndex}>
              BACK TO THE PARTY
            </Button>
          </CardActions>
        </Box>
      </Container>
    </>
  );
};

export default Partners;

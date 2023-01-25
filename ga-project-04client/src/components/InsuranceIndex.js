import { useEffect, useState } from "react";
import { API } from "../lib/api";
import { NOTIFY } from "../lib/notifications";
import PartnerCard from "./common/PartnerCard";
import { Container, Grid } from "@mui/material";

export default function InsuranceIndex() {
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.allPartners)
      .then(({ data }) => {
        NOTIFY.SUCCESS(`Here is ${data.length} list of providers!`);
        setPartners(data);
      })
      .catch(({ message, response }) => {
        NOTIFY.ERROR(message);
        console.log(message, response);
      });
  }, []);
  console.log({ partners });

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {partners?.map((partner) => (
          <Grid item xs={4} key={partner._id}>
            <PartnerCard
              name={partner.name}
              code={partner.code}
              id={partner._id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

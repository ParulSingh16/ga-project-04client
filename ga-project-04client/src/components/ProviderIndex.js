import { useEffect, useState } from "react";
import { API } from "../lib/api";
import { NOTIFY } from "../lib/notifications";
import ProviderCard from "./common/ProviderCard";
import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

//https://stackoverflow.com/questions/68911432/how-to-pass-parameters-with-react-router-dom-version-6-usenavigate-and-typescrip
export const ProviderIndex = () => {
  const [providers, setProviders] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!location.state.policyName) return;
    API.GET(API.ENDPOINTS.allPolicies)
      .then(({ data }) => {
        NOTIFY.SUCCESS(`Here is ${data.length} list of providers!`);
        setProviders(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        NOTIFY.ERROR(message);
        console.log(message, response);
      });
  }, [location.state.policyName]);

  return (
    <Container maxWidth="lg">
      {!providers && (
        <div>
          No Providers Found for the product {location.state.product.product}
        </div>
      )}
      <Grid container spacing={2}>
        {providers
          ?.filter((x) => x.name === location.state.policyName)
          .map((provider) => (
            <Grid item xs={4} key={provider.id}>
              <ProviderCard
                name={provider.provider.name}
                code={provider.code}
                id={provider.provider.id}
                policyName={provider.name}
                productName={location.state.product.product}
                price={(Math.random(50, 100) * 100).toFixed(0)}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

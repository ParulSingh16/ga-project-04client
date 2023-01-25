import { useEffect, useState } from "react";
import { API } from "../lib/api";
import { NOTIFY } from "../lib/notifications";
import PolicyCard from "./common/PolicyCard";
import { Container, Grid } from "@mui/material";
import { SearchBar } from "./common/SearchBar";
import { useNavigate } from "react-router-dom";

export default function InsuranceIndex() {
  const [policies, setPolicies] = useState(null);
  const [search, setSearch] = useState(false);
  const [selectedPolicyName, setSelectedPolicyname] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.GET(API.ENDPOINTS.allPolicies)
      .then(({ data }) => {
        NOTIFY.SUCCESS(`Here is ${data.length} list of policies!`);
        setPolicies(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        NOTIFY.ERROR(message);
        console.log(message, response);
      });
  }, []);

  const onClick = (policyName) => {
    setSearch(true);
    setSelectedPolicyname(policyName);
  };

  const getSelectedProduct = (productName) => {
    setSelectedProduct(productName);
    console.log(selectedProduct); //iphone
    console.log(selectedPolicyName); //Repair Damage
    setSearch(false);
    navigate("/providers", {
      state: { product: productName, policyName: selectedPolicyName },
    });
  };

  return (
    <Container maxWidth="lg">
      {search ? (
        <SearchBar getSelectedProduct={getSelectedProduct} />
      ) : (
        <Grid container spacing={2}>
          {policies
            ?.filter(
              (value, index, self) =>
                index === self.findIndex((t) => t.name === value.name)
            )
            .map((policy) => (
              <Grid item xs={4} key={policy.id} sx={{ marginTop: "10px" }}>
                <PolicyCard
                  name={policy.name}
                  key={policy.id}
                  onClick={onClick}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </Container>
  );
}

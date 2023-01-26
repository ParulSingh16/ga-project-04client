import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { AUTH } from "../../lib/auth";
import { makeStyles } from "@mui/styles";
import { border, color, width } from "@mui/system";

const useStyles = makeStyles({
  root: {
    border: "1px solid white",
    color: "white",
  },
  popupIndicator: {
    color: "white",
  },
});

// taken from https://mui.com/material-ui/react-autocomplete/
//Autocomplete search bar to search for pre-defined products
export const SearchBar = ({ getSelectedProduct }) => {
  console.log(AUTH.getPayload());

  const [selectedProduct, setSelectedProduct] = React.useState("");

  const classes = useStyles();
  const onFindProviderButtonClick = () => {
    getSelectedProduct(selectedProduct);
  };
  return (
    <div style={{ marginTop: "30%", marginLeft: "30%" }}>
      <Autocomplete
        id="highlights-demo"
        sx={{ width: 600 }}
        onChange={(event, value) => setSelectedProduct(value)}
        options={productsOffered}
        classes={{
          inputRoot: classes.root,
          popupIndicator: classes.popupIndicator, //used it to change the theme as my background is dark and needed the card to be white
        }}
        getOptionLabel={(option) => option.product}
        renderInput={(params) => (
          <TextField
            {...params}
            label="What would you like to insure?"
            margin="normal"
            classes={{ root: classes.root }}
            sx={{
              "& label": {
                color: "white",
              },
            }}
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.product, inputValue, {
            insideWords: true,
          });
          const parts = parse(option.product, matches);

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
      <button
        onClick={onFindProviderButtonClick}
        style={{
          marginLeft: "20%",
          fontSize: "18px",
          borderRadius: "4px",
          border: "none",
          width: "300px",
          backgroundColor: "#397dd7",
          color: "white",
        }}
      >
        Find Providers
      </button>
    </div>
  );
};

const productsOffered = [
  //created this json array for dropdown options autofill
  { product: "Iphone" },
  { product: "Car" },
  { product: "Home" },
  { product: "Tv" },
  { product: "Apple Watch" },
  { product: "Laptops" },
  { product: "Furniture" },
  { product: "Vehicle" },
];

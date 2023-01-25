import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { AUTH } from "../../lib/auth";

// taken from https://mui.com/material-ui/react-autocomplete/
//Autocomplete search bar to search for pre-defined products
export const SearchBar = ({ getSelectedProduct }) => {
  console.log(AUTH.getPayload());

  const [selectedProduct, setSelectedProduct] = React.useState("");

  const onFindProviderButtonClick = () => {
    getSelectedProduct(selectedProduct);
  };
  return (
    <div>
      <Autocomplete
        id="highlights-demo"
        sx={{ width: 300 }}
        onChange={(event, value) => setSelectedProduct(value)}
        options={productsOffered}
        getOptionLabel={(option) => option.product}
        renderInput={(params) => (
          <TextField
            {...params}
            label="What would you like to insure?"
            margin="normal"
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
      <button onClick={onFindProviderButtonClick}>Find Providers</button>
    </div>
  );
};

const productsOffered = [
  { product: "Iphone" },
  { product: "Car" },
  { product: "Home" },
  { product: "Tv" },
  { product: "Apple Watch" },
  { product: "Laptops" },
  { product: "Furniture" },
  { product: "Vehicle" },
];

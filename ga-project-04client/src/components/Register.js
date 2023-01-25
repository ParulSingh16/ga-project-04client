import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { API } from "../lib/api";
import { AUTH } from "../lib/auth";
import { NOTIFY } from "../lib/notifications";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid white",
    color: "white",
  },
});

export default function Register() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [formFields, setFormFields] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
  });
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    //   const imageData = new FormData();
    //   imageData.append("file", file);
    //   imageData.append(
    //     "upload_preset",
    //     process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    //   );
    //   try {
    //     const cloudinaryResponse = await API.POST(
    //       API.ENDPOINTS.cloudinary,
    //       imageData
    //     );

    const apiReqBody = {
      ...formFields,
      //   cloudinaryImageId: cloudinaryResponse.data.public_id,
    };
    console.log({ formFields });

    API.POST(API.ENDPOINTS.register, apiReqBody)
      .then(({ data }) => {
        console.log("dataIs", data);
        API.POST(API.ENDPOINTS.login, {
          email: formFields.email,
          password: formFields.password,
        })
          .then(({ data }) => {
            console.log(data);
            AUTH.setToken(data.token);
            NOTIFY.SUCCESS(data.message);

            navigate("/insurance");
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };
  // } catch (e) {
  //   console.log(e);
  //   setError(true);
  // }
  // };

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "center", pt: "200px" }}
    >
      <form onSubmit={handleCreateUser}>
        <div>
          <TextField
            size="small"
            name="username"
            id="username"
            type="text"
            label="Username"
            required={true}
            value={formFields.username}
            onChange={handleChange}
            error={error}
            sx={{
              mb: 2,
              width: 300,
              color: "white !important",
              border: "1px solid white",
              "& label": {
                color: "white",
              },
            }}
            classes={{ root: classes.root }}
            inputProps={{ style: { color: "white" } }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="first_name"
            id="first_name"
            type="text"
            label="FirstName"
            required={true}
            value={formFields.first_name}
            onChange={handleChange}
            error={error}
            sx={{
              mb: 2,
              width: 300,
              color: "white !important",
              border: "1px solid white",
              "& label": {
                color: "white",
              },
            }}
            classes={{ root: classes.root }}
            inputProps={{ style: { color: "white" } }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="last_name"
            id="last_name"
            type="text"
            label="LastName"
            required={true}
            value={formFields.last_name}
            onChange={handleChange}
            error={error}
            sx={{
              mb: 2,
              width: 300,
              color: "white !important",
              border: "1px solid white",
              "& label": {
                color: "white",
              },
            }}
            classes={{ root: classes.root }}
            inputProps={{ style: { color: "white" } }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="email"
            id="email"
            type="email"
            label="Email"
            required={true}
            value={formFields.email}
            onChange={handleChange}
            error={error}
            sx={{
              mb: 2,
              width: 300,
              color: "white !important",
              border: "1px solid white",
              "& label": {
                color: "white",
              },
            }}
            classes={{ root: classes.root }}
            inputProps={{ style: { color: "white" } }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="password"
            id="password"
            type="password"
            label="Password"
            required={true}
            value={formFields.password}
            onChange={handleChange}
            error={error}
            sx={{
              mb: 2,
              width: 300,
              color: "white !important",
              border: "1px solid white",
              "& label": {
                color: "white",
              },
            }}
            classes={{ root: classes.root }}
            inputProps={{ style: { color: "white" } }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="password_confirmation"
            id="password_confirmation"
            type="password"
            label="password_confirmation"
            required={true}
            value={formFields.password_confirmation}
            onChange={handleChange}
            error={error}
            sx={{
              mb: 2,
              width: 300,
              color: "white !important",
              border: "1px solid white",
              "& label": {
                color: "white",
              },
            }}
            classes={{ root: classes.root }}
            inputProps={{ style: { color: "white" } }}
          />
        </div>
        <Button
          type="submit"
          style={{
            marginLeft: "20%",
            fontSize: "18px",
            borderRadius: "6px",
            border: "none",
            marginBottom: "10px",
            width: "200px",
            backgroundColor: "#397dd7",
            color: "white",
          }}
        >
          CREATE ACCOUNT
        </Button>
      </form>
    </Container>
  );
}

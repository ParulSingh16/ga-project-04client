import { Link, useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useAuthenticated } from "../hooks/useAuthenticated";
import { AUTH } from "../lib/auth";

const Navbar = ({ searchedBeers, setSearchedBeers }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useAuthenticated();

  const logout = () => {
    AUTH.logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  const getInsurance = () => {};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              color="white"
              component="div"
              sx={{ mr: 2 }}
            >
              Home
            </Typography>
          </Link>
          <Link to="/insurance" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              color="white"
              component="div"
              sx={{ mr: 2 }}
            >
              Insurance
            </Typography>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/" onClick={logout} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  color="white"
                  component="div"
                  sx={{ mr: 2, borderBottom: "none" }}
                >
                  Logout
                </Typography>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  color="inherit"
                  component="div"
                  sx={{ mr: 2 }}
                >
                  Login
                </Typography>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  color="inherit"
                  component="div"
                  sx={{ mr: 2 }}
                >
                  Register
                </Typography>
              </Link>
            </>
          )}
          {/* <Search
            handleSearchChange={setSearchedBeers}
            searchedBeers={searchedBeers}
          /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

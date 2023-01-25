import { useNavigate } from "react-router-dom";
import Insurance from "../assets/Insurance.png";
import "../styles/Home.scss";

export const Home = () => {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/insurance");
  };
  return (
    <div className="Home">
      <div className="welcome">
        <h1>Get and feel secured</h1>
      </div>
      <div>
        <img
          src={Insurance}
          onClick={onHomeClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

import React from "react";
import logo from "../images/logo.png";
import { Badge, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ loginState }) {
  const navigate = useNavigate();

  // Here we are getting the username.
  const userData = localStorage.getItem("userDetails");
  const username = JSON.parse(userData);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#3bb77e",
    },
  }));

  const redirect = () => {
    navigate("/login");
  };

  return (
    <header className="header-section">
      <div className="logo-section">
        <Link to="/">
          <img className="logo" src={logo} alt="Groceyish Logo" />
        </Link>
        <div>
          <h1>Groceyish</h1>
          <h2>Grocery</h2>
        </div>
      </div>
      <form className="search-form">
        <input placeholder="Search for items..." />
        <button>Search</button>
      </form>
      <div className="action-items">
        <Badge
          badgeContent={
            <Typography
              style={{
                height: "1.3em",
                width: "1.3em",
                fontSize: "1.2em",
                backgroundColor: "#3bb77e",
                color: "#f3f3f3",
                padding: "1.5px 3px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              10
            </Typography>
          }
          style={{ color: "#adadad" }}
        >
          <FavoriteBorderIcon style={{ fontSize: "2em", color: "#3bb77e" }} />
        </Badge>
        <IconButton
          aria-label="cart"
          style={{
            color: "#3bb77e",
            padding: "1.5px 3px",
            textAlign: "center",
          }}
        >
          <StyledBadge badgeContent={1} color="secondary">
            <ShoppingCartIcon style={{ fontSize: "1.5em" }} />
          </StyledBadge>
        </IconButton>

        {!loginState ? (
          <button onClick={redirect} className="selling-btn">
            Login
          </button>
        ) : (
          <Link to="/user" style={{ textDecoration: "none" }}>
            <Avatar
              style={{
                backgroundColor: "#3bb77e",
                fontWeight: "500",
                fontSize: "1.4em",
              }}
            >
              {username.charAt(0)}
            </Avatar>
          </Link>
        )}
      </div>
    </header>
  );
}

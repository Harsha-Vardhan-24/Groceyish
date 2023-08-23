import React, { useState } from "react";
import staticImg from "../images/static/tomato.png";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Productpage() {
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light" ? "#f3f3f3" : "#253d4e";
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: "#253d4e",
      fontWeight: 800,
      fontSize: "1em",
      "&:hover, &:focus": {
        backgroundColor: "#f3f3f3",
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: "#253d4e",
      },
    };
  });

  toast("🦄 Wow so easy!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  function handleClick(event) {
    console.info("You clicked a breadcrumb.");
  }

  const [selectedValue, updateSelectedValue] = useState(1);

  function updateValue(event) {
    if (selectedValue >= 1) {
      event === "increase"
        ? updateSelectedValue(selectedValue + 1)
        : selectedValue > 1 && updateSelectedValue(selectedValue - 1);
    }
  }

  return (
    <section className="product-info-section">
      <div>
        <div className="breadcrumb" role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" fontSize="small">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Home"
              icon={<HomeIcon />}
            />
            <StyledBreadcrumb component="a" href="#" label="Products" />
            <StyledBreadcrumb label="Product" />
          </Breadcrumbs>
        </div>
        <img src={staticImg} alt="Product Image" className="product-image" />
      </div>
      <div className="product-information">
        <p>Vegetables</p>
        <h1>Tomato</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h2>
        <div className="add-more">
          <div className="add-more">
            <button
              className="product-btn"
              onClick={() => updateValue("decrease")}
            >
              -
            </button>
            <h1>{selectedValue}</h1>
            <button
              className="product-btn"
              onClick={() => updateValue("increase")}
            >
              +
            </button>
          </div>
          <button className="product-btn">
            <ShoppingBagIcon />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}

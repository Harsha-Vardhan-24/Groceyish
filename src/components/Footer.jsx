import React from "react";
import paymentLogos from "../images/payment.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <h1>© {currentYear}, All rights reserved </h1>
      <div>
        <img
          className="payment-methods"
          src={paymentLogos}
          alt="payment methods accepted"
        />
      </div>
      <div className="social-icons">
        <InstagramIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
}

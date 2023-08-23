import React from "react";
import CategoriesCard from "../components/CategoriesCard";
import FeaturedCard from "../components/FeaturedCard";
import BestSellingCard from "../components/BestSellingCard";
import AllCards from "../components/AllCards";
import Slider from "react-slick";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const featuredSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main>
      <section className="promotion-area">
        <h1>Don't miss on our fab Discounts & Deals</h1>
        <p>Save 50% on your first order & free delivery also</p>
        <form className="email-prototion">
          <input type="email" placeholder="Enter you email" />
          <button>Sign up</button>
        </form>
      </section>
      <section className="categories-area">
        <h1>Explore categories</h1>
        <div className="card-items">
          <Slider {...settings}>
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
          </Slider>
        </div>
      </section>
      <section className="featured-area categories-area">
        <h1>Featured products</h1>
        <div className="card-items">
          <Slider {...featuredSettings}>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
          </Slider>
        </div>
      </section>
      <section className="featured-area categories-area">
        <h1>Daily Best Sells</h1>
        <div className="card-items">
          <Slider {...featuredSettings}>
            <BestSellingCard />
            <BestSellingCard />
            <BestSellingCard />
            <BestSellingCard />
            <div className="card-item featured-item sign-up-area">
              <h1>10% Off</h1>
              <h2>For new members only</h2>
              <form className="sign-up-form">
                <label htmlFor="sign-up-email">Email</label>
                <input placeholder="Email Here" id="sign-up-email" required />
                <label htmlFor="sign-up-pass">Password</label>
                <input placeholder="Password Here" id="sign-up-pass" required />
                <button>Sign up now!</button>
              </form>
            </div>
          </Slider>
        </div>
      </section>
      <section className="featured-area categories-area">
        <h1>Explore</h1>
        <div className="card-items">
          <Slider {...featuredSettings}>
            <AllCards heading="Explore Products" />
            <AllCards heading="Top Rated" />
            <AllCards heading="Newly Added" />
            <AllCards heading="Best Sellers" />
          </Slider>
        </div>
      </section>
      <section className="features-section">
        <div className="features-area">
          <CurrencyRupeeIcon className="promotion-icon" />
          <div>
            <h1>Best price guarenteed</h1>
            <p>Every day new deals at the lowest price</p>
          </div>
        </div>
        <div className="features-area">
          <SettingsBackupRestoreIcon className="promotion-icon" />
          <div>
            <h1>Buy back</h1>
            <p>Damaged item? Return it with ease no questions asked</p>
          </div>
        </div>
        <div className="features-area">
          <DeliveryDiningIcon className="promotion-icon" />
          <div>
            <h1>Free delivery</h1>
            <p>Free delivery on all orders</p>
          </div>
        </div>
      </section>
      <div className="cart">
        <ShoppingBagIcon className="cart-icon" />
      </div>
    </main>
  );
}

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home-row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            rating={5}
          />
          <Product />
        </div>

        <div className="home-row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home-row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;

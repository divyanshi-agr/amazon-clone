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
            id="1"
            title="
            Acer Nitro VG240Y 23.8 inch Full HD IPS Monitor with FHD & AMD Radeon Freesync Technology (Black)"
            price={8000.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81iIch0B0rL._SL1500_.jpg"
          />

          <Product
            id="2"
            title="
            OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
            price={500.02}
            image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home-row">
          <Product
            id="3"
            title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
            price={800}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
          />
          <Product
            id="4"
            title="Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens(with Bag)"
            price={112.3}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81bVHWevmyL._SL1500_.jpg"
          />
          <Product
            id="5"
            title="Zebronics Zeb-Thunder Wireless BT Headphone Comes with 40mm Drivers, AUX Connectivity, Built in FM, Call Function, 9Hrs* Playback time and Supports Micro SD Card (Red)"
            price={230}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81cJ1kUT1LL._SL1500_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="6"
            title="Philips HTL3320 3.1 CH 300 W Bluetooth Soundbar with Wireless Subwoofer, Dolby Digital Surround Sound, Optical Input and HDMI ARC"
            price={600.99}
            image="https://images-na.ssl-images-amazon.com/images/I/315kFgjKGDL.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about-1.jpg";
import about2 from "../../Assets/About/about-2.jpg";

import Services from "../../Components/Home/Services/Services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../Assets/Brands/brand1.png";
import brand2 from "../../Assets/Brands/brand2.png";
import brand3 from "../../Assets/Brands/brand3.png";
import brand4 from "../../Assets/Brands/brand4.png";
import brand5 from "../../Assets/Brands/brand5.png";
import brand6 from "../../Assets/Brands/brand6.png";
import brand7 from "../../Assets/Brands/brand7.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About RETRO</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h4>
            We define fashion, we are the best at what we do, we are RETRO.
          </h4>
          <p>
            Our vision is to be the best and most reliable online clothing store
            in the world. We are committed to providing our customers with the best
            quality products at the most affordable prices. We are dedicated to providing
            our customers with the best shopping experience possible. We are committed to providing
            our customers with the best customer service possible. We are committed to providing our customers
            with the best shopping experience possible. We are committed to providing our customers with the best quality
            products at the most affordable prices.
          </p>
          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                 Bring back the Vintage Fashion to the Modern World.
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                To be the best and most reliable online clothing store in the world.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="about2" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sapien dignissim a elementum. Sociis metus, hendrerit mauris id
                in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
                sodales orci etiam phasellus lacus id leo. Amet turpis nunc,
                nulla massa est viverra interdum. Praesent auctor nulla morbi
                non posuere mattis. Arcu eu id maecenas cras.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="companyPartners">
        <h5>Company Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;

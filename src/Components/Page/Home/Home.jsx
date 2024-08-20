import { useData } from "../../../context/DataContext";
import React from "react";
import Brands from "./Brand";
import "./home.scss";
import hgl from "../../../Assets/hgl.png";
import nature from "../../../Assets/nature.png";
import cities from "../../../Assets/cities.png";
import { IoLocationOutline } from "react-icons/io5";

const Home = () => {
  const { servicesData, promotionsData, products } = useData();

  return (
    <div className="home-page">
      <Brands />
      <div className="Home-title">
        <h1 className="header">Category</h1>
        <h4 className="doc">We Offer Best Services</h4>
      </div>

      <div className="category">
        {servicesData.map(({ id, img, title }) => (
          <div key={id} className="singleDesc">
            <div className="destImg">
              <img src={img} alt={title} />
              <div className="info">
                <h2>{title}</h2>
                <p className="desc">
                  Sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="promotion-container">
        <div className="promotion">
          <h2 className="header">Promotion</h2>
          <h4 className="doc">We Provide You Best Europe Sightseeing Tours</h4>
          <p className="explain">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button className="btn">View Packages</button>
        </div>
        <div className="promotions">
          {promotionsData.map(({ id, img, price }) => (
            <div key={id} className="popular">
              <div className="proImg">
                <img src={img} alt="" />
              </div>
              <span className="price">{price}</span>
            </div>
          ))}
        </div>
        <div className="eiffel-tower">
          <img src={hgl} alt="Eiffel Tower" />
        </div>
      </div>
      <div className="thumb">
        <div
          className="nature-bg"
          style={{ backgroundImage: `url(${nature})` }}
        />
        <div
          className="city-bg"
          style={{ backgroundImage: `url(${cities})` }}
        />
      </div>

      <div className="products">
        <div className="products-title">
          <h3 className="header">Trendy</h3>
          <h4 className="doc">Our Trending Tour Packages</h4>
        </div>

        <div className="products-list">
          {products.map((tour) => (
            <div key={tour.id} className="product-card">
              <img
                src={tour.img}
                alt={tour.location}
                className="product-image"
              />

              <div className="product-info">
                <div className="product-meta">
                  <span>{tour.days} Days</span>
                  <span>{tour.people} People Going</span>
                  <span>{"⭐".repeat(tour.rating)}</span>
                </div>

                <h3 className="product-location">{tour.location}</h3>
                <h4 className="product-country"><IoLocationOutline />{tour.country}</h4>

                <div className="product-pricing">
                  <span className="price">{tour.price}$</span>
                  {tour.oldPrice && (
                    <span className="old-price">{tour.oldPrice}$</span>
                  )}
                </div>

                <p className="product-desc">
                  Nam exercitationem commodi et ducimus quia in dolore animi sit
                  mollitia amet id quod eligendi. Et labore harum non nobis
                  ipsum eum molestias mollitia et corporis praesentium a
                  laudantium internos.
                </p>

                <button className="btn explore-btn">Explore Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

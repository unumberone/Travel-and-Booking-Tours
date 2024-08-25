import React from "react";
import "./About.scss";
import a1 from "../../../Assets/aboutproImg.png";
import a2 from "../../../Assets/bgstyleabout.png";
import a3 from "../../../Assets/circle.png";
import modal from "../../../Assets/modal.png";
import pic3 from "../../../Assets/trend.png";
import pic4 from "../../../Assets/cerTrend.png";
import { useData } from "../../../context/DataContext";


const About = () => {
  const { abouts } = useData();
  return (
    <div className="about">
      <div className="promotioncontainer">
        <div className="Promotion">
          <h1 className="header">Promotion</h1>
          <div className="doc">
            We Provide You Best Europe Sightseeing Tours
          </div>
          <div className="explaining">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </div>
          <div className="btn">View Package</div>
        </div>
        <div className="proImgage">
          <img className="image1" src={a1} alt="" />
          <img className="image2" src={a2} alt="" />
          <img className="image3" src={a3} alt="" />
        </div>
      </div>
      <div className="sig">
        <h3 className="pr">Wanderlust</h3>
        <img className="Sig" src={modal} alt="" />
      </div>
      <div className="trending">
        <div className="imgTrend">
          <img src={pic3} alt="Trend 1" className="trend1" />
          <img src={pic4} alt="Trend 2" className="trend2" />
        </div>

        <div className="content">
          <div className="trendText">
            <h1 className="header">Trend</h1>
            <h2 className="doc">Our Popular Tour Plans</h2>
            <p className="explaining">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis{" "}
              <br></br>
              praesentium a laudantium. Et labore harum non nobis ipsum eum
              <br></br>
              molestias mollitia et corporis praesentium a laudantium.
            </p>
          </div>

          <div className="percent">
            <div className="percentage">
              <div className="circle blue">
                <span>78%</span>
              </div>
              <span className="label">VACATIONS</span>
            </div>
            <div className="percentage">
              <div className="circle pink">
                <span>55%</span>
              </div>
              <span className="label">HONEYMOON</span>
            </div>
            <div className="percentage">
              <div className="circle purple">
                <span>30%</span>
              </div>
              <span className="label">MUSICAL EVENTS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Explore">
        <div className="explore">
          <h1 className="header">Explore more</h1>
          <div className="doc">Our International Packages</div>
        </div>
        <div className="picExp">
          {abouts.map(({id, img, locate, price}) => (
            <div key={id} className="pic">
              <div className="picE">
                <img src= {img} alt= {locate} />
                <p>{locate}</p>
              </div>
              <span className="Price">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;

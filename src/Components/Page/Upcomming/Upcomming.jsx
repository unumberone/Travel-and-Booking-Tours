import React, { useState } from "react";
import "./Upcomming.scss";
import { handleFormSubmit } from "./form-handler";
import { useData } from "../../../context/DataContext";
import u1 from "../../../Assets/u1.png";
import u2 from "../../../Assets/u2.png";
import u3 from "../../../Assets/u3.png";
import u4 from "../../../Assets/u4.png";
import u5 from "../../../Assets/u5.png";
import u6 from "../../../Assets/u6.png";

const Upcomming = () => {
  const TourDay = ({ day, title, description, items }) => {
  return (
    <div className="tour-day">
      <h3>Day {day}: {title}</h3>
      <p>{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
  const [activeSection, setActiveSection] = useState("info");
  

  const tourPlan = [
    {
      id: 1,
      day: 1,
      title: "Departure",
      description:
        "Quae tempore voluptate Qui Quam Commodi Baen Possimus Alias",
      items: [
        "5 Star Accommodation",
        "Breakfast",
        "Lunch Accommodation",
        "Breakfast",
      ],
    },
    {
      id: 2,
      day: 2,
      title: "Visiting Zurich, Geneva And Zermatt",
      description:
        "Docer Ducim Felix Voluptas Nec Perspiciatis Eu, Praesentium Quae Sem, Nobis Consequatur Nescia Cum Erum Doctor Poido Luptus Et Minima Vel Dignissimos Lic.",
      items: [
        "5 Star Accommodation",
        "Breakfast",
        "Lunch Accommodation",
        "Breakfast",
      ],
    },
    {
      id: 3,
      day: 3,
      title: "Rest",
      description:
        "Docer Ducim Felix Voluptas Nec Perspiciatis Eu, Praesentium Quae Sem, Nobis Consequatur Nescia Cum Erum Doctor Poido Luptus Et Minima Vel Dignissimos Lic.",
      items: [
        "5 Star Accommodation",
        "Breakfast",
        "Lunch Accommodation",
        "Breakfast",
      ],
    },
    {
      id: 4,
      day: 4,
      title: "Historical Tour",
      description:
        "Docer Ducim Felix Voluptas Nec Perspiciatis Eu, Praesentium Quae Sem, Nobis Consequatur Nescia Cum Erum Doctor Poido Luptus Et Minima Vel Dignissimos Lic.",
      items: [
        "5 Star Accommodation",
        "Breakfast",
        "Lunch Accommodation",
        "Breakfast",
      ],
    },
    {
      id: 5,
      day: 5,
      title: "Return",
      description:
        "Consequat Magno Quam Erum, Docer Poido Luptus, Eligendi Nec, Voluptates Atque, Alio In Erum Nulla, Assumenda Impedit A Voluptatibus Vitae.",
      items: [
        "5 Star Accommodation",
        "Breakfast",
        "Lunch Accommodation",
        "Breakfast",
      ],
    },
  ];

  const handleSectionClick = (section) => (event) => {
    event.preventDefault(); // Ngăn hành vi mặc định của liên kết
    setActiveSection(section);
  };

  const DataU = [
    { id: 1, img: u1 },
    { id: 2, img: u2 },
    { id: 3, img: u3 },
    { id: 4, img: u4 },
    { id: 5, img: u5 },
    { id: 6, img: u6 },
  ];

  return (
    <div className="tour-container">
      <header className="tour-header">
        <nav>
          <ul>
            <li>
              <a href="#info" onClick={handleSectionClick("info")}>
                Information
              </a>
            </li>
            <li>
              <a href="#tour-plan" onClick={handleSectionClick("tour-plan")}>
                Tour Plan
              </a>
            </li>
            <li>
              <a href="#location" onClick={handleSectionClick("location")}>
                Location
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={handleSectionClick("gallery")}>
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/*phần information */}
      <section className="tour-details">
        {activeSection === "info" && (
          <div className="tour-info">
            <h2
              className="header"
              style={{
                fontFamily: "Volkhov",
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "64.5px",
                color: "rgba(24, 30, 75, 1)",
              }}
            >
              Switzerland
            </h2>
            <b className="price">
              <span style={{ color: "red" }}>1,000$</span> / per couple
            </b>
            <b className="Rating">⭐⭐⭐⭐⭐ (125 reviews)</b>
            <h4 className="description">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor
              similique ut quasi maxime ut deserunt autem At praesentium
              voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
              aut provident aliquam. Aut aspernatur consequuntur eum quaerat
              distinctio ut inventore aliquid et quasi alias ut rerum suscipit
              et nihil deleniti.
            </h4>
            <ul className="tour-meta">
              <li>
                <strong>Destination:</strong> Zurich, Switzerland
              </li>
              <li>
                <strong>Departure:</strong> 1 hour before departure
              </li>
              <li>
                <strong>Departure Time:</strong> September 20, 2024
              </li>
              <li>
                <strong>Return Time:</strong> September 30, 2024
              </li>
              <li>
                <strong>Dress Code:</strong> Casual, comfortable wear
              </li>
              <li>
                <strong>Included:</strong> Airfare, Lunch, Dinner
              </li>
              <li>
                <strong>Not Included:</strong> Airport taxes
              </li>
            </ul>
            <div className="form-our-gallery">
              <h2
                style={{
                  fontFamily: "Volkhov",
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "64.5px",
                  color: "rgba(24, 30, 75, 1)",
                }}
              >
                From our gallery
              </h2>
              <h4 className="explaining">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi.
              </h4>
              <div className="qc">
                {DataU.map(({ id, img }) => (
                  <div key={id} className="imgU">
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/*phần tour plan */}

        {activeSection === "tour-plan" && (
          <div className="tour-plan">
            <h2>Tour Plan</h2>
            <div className="tour-info">
              {tourPlan.length > 0 ? (
                tourPlan.map((tourDay) => (
                  <TourDay
                    key={tourDay.id}
                    day={tourDay.day}
                    title={tourDay.title}
                    description={tourDay.description}
                    items={tourDay.items}
                  />
                ))
              ) : (
                <div>Không có dữ liệu kế hoạch tour</div>
              )}
            </div>
          </div>
        )}
        {/*location*/}
        {activeSection === "location" && (
          <div className="tour-info">
            <div className="loca">
              <h2
                className="doc"
                style={{
                  fontFamily: "Volkhov",
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "64.5px",
                  color: "rgba(24, 30, 75, 1)",
                }}
              >
                Location
              </h2>
              <b className="explain">
                Qui tempore voluptate qui quia commodi rem praesentium alias et
                voluptates officia sed molestiae sint et voluptas quos. Qui
                harum repudiandae galisum dolorem Hic deleniti officiis est
                sapiente explicabo non eaque corporis aut voluptatum iusto At
                facere enim id voluptas reprehenderit. Ut voluptas laudantium
              </b>
              <div className="map-container">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.852692539617!2d105.84249131523268!3d21.028511586092075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d7d6bce7b%3A0x9290bb2e6b63e024!2zVHJpbmggVGnDqyDEkOG7lCBTa2kgTmdh!5e0!3m2!1sen!2s!4v1624982720815"
                  width="100%"
                  height="650"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <b className="explain">
                Sit quasi soluta non temporibus voluptas non necessitatibus
                tempore sit deleniti praesentium aut velit nostrum ut itaque
                atque ad expedita veniam. Hic deleniti officiis est sapiente
                explicabo non eaque corporis aut voluptatum iusto At facere enim
                id voluptas reprehenderit. Ut voluptas laudantium et molestias
                voluptatem ex doloremque omnis est ipsum nihil. <br></br>
                <br></br>
                Quo facere eveniet 33 sint rerum est internos impedit sed
                dignissimos quia. Et rerum deleniti et voluptates saepe qui
                labore quisquam non accusantium temporibus. Quo velit numquam
                hic excepturi sequi sed dicta doloribus! In quos possimus quo
                quibusdam aliquid est culpa porro sed molestiae libero At
                blanditiis minima a reiciendis fugiat.
              </b>
            </div>
          </div>
        )}
        {/*phần gallery*/}
        {activeSection === "gallery" && (
          <div className="tour-gallery">
            <h2
              style={{
                fontFamily: "Volkhov",
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "64.5px",
                color: "rgba(24, 30, 75, 1)",
              }}
            >
              Tour Gallery
            </h2>
            <div className="gallery-images">
              <p style={{ color: "red" }}>COMING SOON...</p>
            </div>
          </div>
        )}
        {/**form booking */}
        <div className="booking-form">
          <h3>Book This Tour</h3>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone" required />
            <select name="numberOfPeople" required>
              <option value="" disabled defaultValue>
                Number of People
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input type="date" name="date" placeholder="dd-mm-yy" required />
            <input
              type="number"
              name="numberOfTicket"
              placeholder="Number of ticket"
              required
            />
            <textarea name="message" placeholder="Message" rows="3"></textarea>
            <button type="button" className="btn">
              Check Availability
            </button>
            <button type="submit" className="btn">
              Book Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Upcomming;

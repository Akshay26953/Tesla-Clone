import React from "react";
import "./Section.scss";
import "./Section.css";
import "./Footer.scss";
import Data from "../data/carInfo.json";
import { Link } from "react-router-dom";
// import 'animate.css'; 

function Section(props) {
  const scrollDown = () => {
    window.scrollTo({
      top: (props.id + 1)*(window.innerHeight),
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="container">
      <section
        id={`section${props.id}`}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
    
          <div className="modelName">
            <h1 className="title">{props.title}</h1>
            {props.subtitle && <p className="subtitle">{props.subtitle}</p>}
          </div>
        <div className="bottom">
          <div className="buttons">
              <button
                className="btn btn-left"
                style={{
                  backgroundColor: `${props.id < Data.length - 1 ? "rgba(23, 26, 32, 0.8)" : "black"}`,
                }}
              >
                {props.btnL}
              </button>
              <button
                className="btn btn-right"
                style={{
                  display: `${props.btnR ? "block" : "none"}`,
                }}
              >
                {props.btnR}
              </button>
          </div>
            <div className="arrow">
              {/* <Link to={`#section${props.id + 1}`}> */}
                <i
                  className="fa-solid fa-chevron-down fa-lg"
                  style={{
                    visibility: `${props.id < Data.length - 1 ? "visible" : "hidden"}`,
                  }}
                  onClick={scrollDown}
                ></i>
              {/* </Link> */}
            </div>
          <div
            className="footer"
            style={{
              display: `${props.id < Data.length - 1 ? "none" : "block"}`,
            }}
          >
            <ul>
              <li>
                <Link to="/">Tesla &#169; 2022</Link>
              </li>
              <li>
                <Link to="/">Privacy & Legal</Link>
              </li>
              <li>
                <Link to="/">Vehicle Recalls</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Engage</Link>
              </li>
              <li>
                <Link to="/">Locations</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;

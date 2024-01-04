import React from "react";
import "./coffe.css";
import { useParams } from "react-router-dom";

const Coffe = () => {
    const param=useParams()
  return (
    <div>
      <spam style={{ textTransform: "uppercase" }}>{param.path}</spam>
      <div id="container-card-archi">
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/espace/44.jpg?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/espace/55.jpg?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div></div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/espace/77.jpg?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div></div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/espace/88.jpg?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/espace/P1190891.JPG?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/espace/P1190892.JPG?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
    
  );
};

export default Coffe;
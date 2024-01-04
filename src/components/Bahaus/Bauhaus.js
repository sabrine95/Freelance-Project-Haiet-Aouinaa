import React from "react";
import "./bauhaus.css";
import { useParams } from "react-router-dom";

const Bauhaus = () => {
    const param=useParams()
  return (
    <div>
      <spam style={{ textTransform: "uppercase" }}>{param.path}</spam>
      <div id="container-card-archi">
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/kressi/bauhaus3-rem.png?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/kressi/tawla-removebg-preview.png?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div></div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/kressi/bauhaus2-removebg-preview-removebg-preview.png?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div></div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/kressi/korsi-removebg-preview.png?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/kressi/bauhaus_grand.PNG?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="box">
        <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/kressi/bauhaus1.PNG?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div></div>
        <div className="box">
          <div
            className="box-img"
            style={{
              backgroundImage: `url(https://github.com/sabrine95/design-haiet/blob/master/kressi/bauhaus4.PNG?raw=true)`,
              backgroundSize: " 250px 250px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
    
  );
};

export default Bauhaus;
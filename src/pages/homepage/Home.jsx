import React, { useEffect, useState } from "react";
import "./homepage.css";
import Navigation from "../../components/Navigation/Navigation";

const Home = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  return (
    <div className="homepage-background">
      <div className="homepage">
        <div className="navigation-pos">
          <Navigation lang={props.lang} setlang={props.setlang} />
        </div>
        <div className="homepage-about">
          {props.lang === 0 ? (
            <div>
              <p>Haïet Ouenna</p>
              <p>
                Architecte urbaniste, Enseignante de Yoga Iyengar.<br></br>
              </p>
              <a
                style={{
                  fontFamily: "st_marie_thinthin",
                  fontSize: "15px",
                  color: "black",
                  paddingTop: "0",
                  marginTop: "0",
                }}
              >
                Cliquez sur le visage !
              </a>
              <p>ouenna.h@gnet.tn</p>{" "}
            </div>
          ) : props.lang === 1 ? (
            <div>
              <p>حياة عوينا</p>
              <p>
                مديرة أعمال,مهندسة معمارية,خبيرة يوجا ينجار<br></br>
              </p>
              <a
                style={{
                  fontFamily: "st_marie_thinthin",
                  fontSize: "15px",
                  color: "black",
                  paddingTop: "0",
                  marginTop: "0",
                }}
              >
                اضغط على الوجه
              </a>
              <p>ouenna.h@gnet.tn</p>{" "}
            </div>
          ) : (
            <div>
              <p>Haïet Ouenna</p>
              <p>
                Business Leader, Architecte, Advanced Master in Iyengar Yoga.
                <br></br>
              </p>
              <a
                style={{
                  fontFamily: "st_marie_thinthin",
                  fontSize: "15px",
                  color: "black",
                  paddingTop: "0",
                  marginTop: "0",
                }}
              >
                Click on the face!
              </a>
              <p>ouennah@gmail.com</p>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

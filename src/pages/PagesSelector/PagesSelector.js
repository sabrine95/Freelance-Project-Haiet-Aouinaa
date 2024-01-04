import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Architectur from "../../components/Architectur/Architectur";
import Archiyoga from "../../components/ArchiYoga/Archiyoga";
import Designe from "../../components/Design/Designe";
import Sidebar from "../../components/SideBar/Sidebar";
import Video from "../../components/video/Video";
import Yoga from "../../components/yoga/Yoga";
import Courcollective from "../../components/courcollective/Courcollective";
import "./pagesselector.css";
import { data } from "../../db";
import Insidearchitectur from "../../components/insideArchi/Insidearchitectur";
import Architecturfinalpath from "../../components/insideArchi/Architecturfinalpath";
import Courparticulier from "../../components/courpaticulier/Courparticulier";
import Sideright from "../../components/SideBar/Sideright";
import Institusnetro from "../pages with more content/Institusnetro";
import CHUrabta from "../pages with more content/CHUrabta";
import Coffe from "../../components/Coffe/Coffe";
import Bauhaus from "../../components/Bahaus/Bauhaus";

const PagesSelector = (props) => {
  const [check, setcheck] = useState(false);
  const [checkinsidearchi, setcheckinsidearchi] = useState(false);
  const [checkparm, setcheckparm] = useState(false);

  const parm = useParams();
  useEffect(() => {
    console.log(`intab3o fi check ${check}`);
    setcheck(false);
    setcheckinsidearchi(false);
    Object.keys(data).map((el, index) =>
      (parm.id == el || parm.path) && parm.id != "design"
        ? setcheckinsidearchi(true)
        : console.log("")
    );

    Object.keys(data).map((el, index) =>
      parm.id == el ? setcheckparm(true) : console.log("")
    );
    // Object.keys(data).map((el,index)=>
    // (parm.id==el)? console.log(Object.values(data)[index]):console.log("nono")
    // )
    Object.keys(data).map((el, index) =>
      parm.id == el
        ? Object.values(data)[index].map((ell, indexx) =>
            parm.path == ell[1] ? setcheck(true) : console.log("")
          )
        : console.log("")
    );
  });

  return (
    <div className="pages-selector">
      <div className="part-one">
        <Sidebar
          lang={props.lang}
          setlang={props.setlang}
          season={props.season}
        />
      </div>
      {parm.id == "architectur" ? (
        <div className="part-two">
          <Architectur lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "yoga" ? (
        <div className="part-two">
          <Yoga lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "video" ? (
        <div className="part-two">
          <Video lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "design" && parm.path == "bauhaus" ? (
        <div className="part-two">
          <Bauhaus lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "design" && parm.path == "espace cramant" ? (
        <div className="part-two">
          <Coffe lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "design" ? (
        <div className="part-two">
          <Designe lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "hopital" && parm.path == "Institut Nerologie" ? (
        <div className="part-two">
          <Institusnetro />
        </div>
      ) : parm.id == "hopital" && parm.path == "CHU LA RABTA" ? (
        <div className="part-two">
          <CHUrabta />
        </div>
      ) : parm.id == "archiyoga" ? (
        <div className="part-two">
          <Archiyoga lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "cours-particuliers" ? (
        <div className="part-two">
          <Courparticulier lang={props.lang} setlang={props.setlang} />
        </div>
      ) : parm.id == "cours-collective" ? (
        <div className="part-two">
          <Courcollective lang={props.lang} setlang={props.setlang} />
        </div>
      ) : check ? (
        <div className="part-two">
          <Architecturfinalpath />
        </div>
      ) : checkparm ? (
        <div className="part-two">
          <Insidearchitectur />
        </div>
      ) : (
        <div className="part-two">
          <p>NOT FOUND</p>
        </div>
      )}

      <div className="part-three">
        {checkinsidearchi ? (
          <div>
            <Sideright parm={parm} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PagesSelector;

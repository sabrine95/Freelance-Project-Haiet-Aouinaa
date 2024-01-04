import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = (props) => {
  return (
    <div className="nav">
      <div className="nav-left">
      <Link className="t-d-none" to="/yoga">{(props.lang==0)?<h1>Y</h1>:(props.lang==1)?<h1>ي</h1>:<h1>Y</h1>}</Link>
      </div>
      <div className="nav-right">
        <div className="nav-right-Archi">
          <Link className="t-d-none" to="/architectur">{(props.lang==0)?<h1>A</h1>:(props.lang==1)?<h1>ه</h1>:<h1>A</h1>}</Link>
        </div>
        <div className="nav-right-VI">
        <Link className="t-d-none" to="/video">{(props.lang==0)?<h1>V</h1>:(props.lang==1)?<h1>ف</h1>:<h1>V</h1>}</Link>
        </div>
        <div className="nav-right-ArchiYoga">
        <Link className="t-d-none" to="/archiyoga">{(props.lang==0)?<h1>A/Y</h1>:(props.lang==1)?<h1>ه\ي</h1>:<h1>A/Y</h1>}</Link>
          
        </div>
        <div className="nav-right-Design">
        <Link className="t-d-none" to="/design">{(props.lang==0)?<h1>D</h1>:(props.lang==1)?<h1>ت</h1>:<h1>D</h1>}</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navigation;

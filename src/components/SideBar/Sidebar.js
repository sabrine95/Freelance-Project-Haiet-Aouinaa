import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = (props) => {

  return (
    <div  id="sidebar">
      <li>
        <Link id="l" to="/">
          {(props.lang==0)?<h1>H</h1>:(props.lang==1)?<h1>م</h1>:<h1>H</h1>}
        </Link>
      </li>

      <li>
        <Link id="l" to="/architectur">
        {(props.lang==0)?<h1>A</h1>:(props.lang==1)?<h1>ه</h1>:<h1>A</h1>}
        </Link>
      </li>
      
      <li>
        <Link id="l" to="/yoga">
        {(props.lang==0)?<h1>Y</h1>:(props.lang==1)?<h1>ي</h1>:<h1>Y</h1>}
        </Link>
      </li>
     
      <li>
        <Link id="l" to="/video">
        {(props.lang==0)?<h1>V</h1>:(props.lang==1)?<h1>ف</h1>:<h1>V</h1>}
        </Link>
      </li>
      <li>
        <Link id="l" to="/archiyoga">
        {(props.lang==0)?<h1>A/Y</h1>:(props.lang==1)?<h1>ه\ي</h1>:<h1>A/Y</h1>}
        </Link>
      </li>
      <li>
        <Link id="l" to="/design">
        {(props.lang==0)?<h1>D</h1>:(props.lang==1)?<h1>ت</h1>:<h1>D</h1>}
        </Link>
      </li>
    </div>
  );
};

export default Sidebar;

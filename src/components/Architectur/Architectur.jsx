import { useEffect,useState } from "react";
import "./archi.css";
import {data} from'../../db.js';
import {imglist} from'../../db.js';
import { Link, useParams,useNavigate } from "react-router-dom";

const Architectur = (props) => {
  const Navigate=useNavigate();

  const[len,setlen]=useState();
  useEffect(()=>{
    setlen(Object.keys(data).length)
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
)
  return (
    <div >
      <div>
        {(props.lang===0)? <spam>ARCHITECTURE</spam> :
        (props.lang===1)? <spam>هندسة معمارية</spam> :
        <spam>ARCHITECTURE</spam>
      }
      </div>
      <div className="container-architectur">
        {
          Object.keys(data).map((domaine,index) =>  
          <div className="container-card">

      <div className="card">
        <div className="card-img" style={{backgroundImage:`url(${imglist[index]})`}}>
        <div className="card-body">
          <h1 className="card-title">{domaine}</h1>
          <button className="card-btn" onClick={()=>Navigate(`/${domaine}`)}>explore</button>
        </div>
      </div>
    </div>
    </div>
          )    
        }   
        </div>  
    </div>
  );
};
export default Architectur;

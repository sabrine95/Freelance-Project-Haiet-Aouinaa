import {useEffect,useState} from 'react'
import { data } from '../../db';
import { Link, useParams } from 'react-router-dom';
import "./insidearchitectur.css"
import useSound from "use-sound";
import ringer from "../calm.mp3"



const Insidearchitectur = () => {
 


    const [findtarget,setfindtarget]=useState(0);


    const parm=useParams();
    useEffect(()=>{
      Object.keys(data).map((el,index)=>
      (parm.id==el)? setfindtarget(index):console.log(`ok ${findtarget}`)
      )
          
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera     
    }
   ,)
  return (
    <div>
        <spam style={{textTransform: "uppercase" }}>{parm.id}</spam>
        <div id='container-card-archi'>
        {
        Object.values(data)[findtarget].map((el,index)=>
        <Link to={el[1]}><div className="box">
        <div className="box-img" style={{backgroundImage: `url(${el[3]})`}} >
        </div>
        </div></Link>
            )
        }
         </div>
         
 
    </div>
  )
}

export default Insidearchitectur
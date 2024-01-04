import React from 'react'
import {data} from '../../db.js'
import { useEffect ,useParams,useState} from 'react'
import "./sidebar.css";
import { Link } from 'react-router-dom';

const Sideright = (props) => {
    const {parm} = props;
    const [findtarget,setfindtarget]=useState(0);
    useEffect(()=>{
        Object.keys(data).map((el,index)=>
        (parm.id==el)? setfindtarget(index):console.log(`ok ${findtarget}`)
        )
      }
     ,)
  return (
<div id='sidebarrigt'>
{       
    Object.values(data)[findtarget].map((el,index)=>
    <li>
        <Link id="l" to={`/${parm.id}/${el[1]}`}>
            <h2> 
                {el[1].slice(el[1].length-3,el[1].length)}
            </h2>
        </Link>
    </li>
                                        )
}
</div>
    

    
  )
}

export default Sideright
import React, {useEffect} from 'react'
import './design.css'
import { Link,useNavigate } from "react-router-dom";
const Designe = (props) => {
    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
    const navigate = useNavigate()
    return (
        <div><h1 style={
            {
                marginTop: "0",
                paddingTop: "0"
            }  
        }>
          {(props.lang === 0) ? 'Design' : (props.lang === 1) ? 'تصميم' : "Design"}</h1>
        <div className='cont'>
            
         
             <div className="main">
      <div class="minip">
        <div class="mg">
          <div class="clr"></div>
          <div class="group"></div>
        </div>
        <div
          className="av"
          style={{
            backgroundImage:
              'url("https://images.adsttc.com/media/images/6272/e436/1b6f/3a01/6a83/3c03/large_jpg/105-kantoor-thonik-c-ossip.jpg?1651696700")',
          }}
        />
        <div className="info">
          <name style={{fontSize:16,fontWidth:"bold"}}>Bauhaus</name>
        </div>
        <button className="plot " title="plot with jinkyu" onClick={()=> navigate("/design/bauhaus")} > 
        {(props.lang === 0) ? 'Explorez plus →' : (props.lang === 1) ? 'اكتشف المزيد→' : "Explore more →"} 
        </button>
      </div>
    </div>
    <div className="main">
      <div class="minip">
        <div class="mg">
          <div class="clr"></div>
          <div class="group"></div>
        </div>
        <div
          className="av"
          style={{
            backgroundImage:
              'url("https://images.adsttc.com/media/images/6272/e436/1b6f/3a01/6a83/3c03/large_jpg/105-kantoor-thonik-c-ossip.jpg?1651696700")',
          }}
        />
        <div className="info">
          <name style={{fontSize:16,fontWidth:"bold"}}>Espace Cramant</name>
        </div>
        <button className="plot " title="plot with jinkyu" onClick={()=> navigate("/design/espace cramant")}>
        {(props.lang === 0) ? 'Explorez plus →' : (props.lang === 1) ? 'اكتشف المزيد→' : "Explore more →"} 
        </button>
      </div>
    </div>
                 </div></div>
    )
}

export default Designe
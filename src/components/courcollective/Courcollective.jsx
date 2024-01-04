import React from 'react'
import './courcollective.css'
import '../style.css'

const Courcollective = (props) => {
  let x=props.lang
  return (
    <div>
    <div ><h1 style={{paddingTop:"0"}}>{(props.lang===0)?"Cour Collectifs":(props.lang===1)? "دروس جماعية":"Group lessons"}</h1></div>
    
    
    {(props.lang===0)? <div className='description-cour-collective'><h2>Ouvert à tous, inscription possible toute l'année !<br/>
    Pour toute inscription ou demande d'information, merci de me contacter par Email : 
    <div style={{color:"#82b1cd"}}>ouennah@gmail.com</div></h2>
    <h2>Les cours sont donnés en présentiel à l’Espace Zmorda sokra,tunis ou sur Zoom.</h2>
    <h2>Le mardi et jeudi : de 17hmn à 19h</h2>
<h2>Le samedi de 10h à 12h</h2></div>:
(props.lang===1)? 
<div className='description-cour-collective'><h2>!مفتوح للجميع،التسجيل ممكن على مدار السنة
<br></br>:لأي تسجيل أو طلب للحصول على معلومات ، يرجى الاتصال بي عبر البريد الإلكتروني 
    <div style={{color:"#82b1cd"}}>ouennah@gmail.com</div></h2>
    <h2>Zoom يتم تقديم الفصول مباشرة في فضاء زمرد سكرى تونس ،أو على</h2>
    <h2>الثلاثاء والخميس: من 5 مساءً حتى 7 مساءً</h2>
<h2>السبت من الساعة 10 صباحًا حتى الساعة 12 ظهرًا</h2></div>:
<div className='description-cour-collective'><h2>Open to all, registration possible all the year !<br/>
For any registration or request for information, please contact me by Email: 
    <div style={{color:"#82b1cd"}}>ouennah@gmail.com</div></h2>
    <h2>Classes are given face-to-face at Espace Zmorda sokra, tunis or on Zoom.</h2>
    <h2>Tuesday and Thursday: 5 p.m. to 7 p.m.</h2>
    <h2>Saturday from 10 a.m. to 12 p.m.</h2></div>}
    
    
    <div className='court-collective-prix-container'>
        <div className='court-collective-prix-container-child'>
          {(props.lang===0)? <img src='https://raw.githubusercontent.com/sabrine95/haiet/master/affiche/fr.png' alt='pub'/> :
          (props.lang===1)? <img src='https://raw.githubusercontent.com/sabrine95/haiet/master/affiche/arabic.png' alt='pub'/>
          : <img src='https://raw.githubusercontent.com/sabrine95/haiet/master/affiche/eng.png' alt='pub'/>}  
        </div>
    </div>
    <a style={{textDecoration:"none"}} href={require("../../yoga.docx")} download="yoga.docx"> <button className='yoga-dowload-button'>{(props.lang===0)?"Plus d'informations sur Yoga Iyengar":(props.lang===1)? "مزيد من المعلومات حول يوجا ينجار":"More information about Yoga Iyengar"}</button></a>
   

</div>
  )
}

export default Courcollective
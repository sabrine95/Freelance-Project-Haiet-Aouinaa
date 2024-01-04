import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./yoga.css";

const Yoga = (props) => {
  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  return (
    <div className="bloc">
      <div className="bloc-slider">
        <div className="bloc-slider__item">
          <div className="bloc-slider__img1" >     
          </div>
          <div className="bloc-slider__content">
            <div className="bloc-slider__title">{(props.lang===0)? <h2>Cour Collectifs</h2>:(props.lang===1)? <h2>دروس جماعية</h2>:<h2>Group lessons</h2>}</div>
            <div className="bloc-slider__text">{(props.lang===0)? <h3>« Le Yoga est une lumière, qui une fois allumée, ne faiblit pas. Plus vous pratiquez,plus la flamme est brillante. » BKS Iyengar</h3>:
            (props.lang===1)? <h3>"اليوغا هي ضوء لا يتلاشى بمجرد أن يضيء. كلما تدربت أكثر ، كانت الشعلة أكثر إشراقًا »<br></br>BKS Iyengar</h3>:
            <h3>“Yoga is a light, which once lit, does not fade. The more you practice, the brighter the flame. » BKS Iyengar</h3>}
            </div>
              <Link className="bloc-slider__button" to="/cours-collective">{(props.lang===0)? "REJOIGNEZ-NOUS":(props.lang===1)? "انضم إلينا":"JOIN US"}</Link></div>
        </div>
      </div>
      <div className="bloc-slider">
        <div className="bloc-slider__item">
          <div className="bloc-slider__img2"></div>
          <div className="bloc-slider__content">
          <div className="bloc-slider__title">{(props.lang===0)? <h2>Cour Particuliers</h2>:(props.lang===1)? <h2>دروس خصوصية</h2>:<h2>Private lessons</h2>}</div>
            <div className="bloc-slider__text">
            {(props.lang===0)? <h3>« Que nous atteignons ou non le but dans cette vie, le chemin vers soi- même accompli en empruntant la voie du yoga en vaut les efforts ».</h3>:
            (props.lang===1)? <h3>"سواء وصلنا إلى الهدف في هذه الحياة أم لا ، فإن الرحلة إلى الذات من خلال اتخاذ طريق اليوغا تستحق الجهد المبذول"</h3>:
            <h3>"Whether or not we reach the goal in this life, the journey to self made by taking the path of yoga is worth the effort."</h3>}
</div>
            <Link className="bloc-slider__button" to="/cours-particuliers">{(props.lang===0)? "REJOIGNEZ-NOUS":(props.lang===1)? "انضم إلينا":"JOIN US"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;


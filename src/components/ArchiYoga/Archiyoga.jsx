import React,{useEffect} from "react";
import "./archiyoga.css";
const Archiyoga = (props) => {
  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  return (   
    <div>
      <video controls autoplay width="53%" style={{marginTop:"0px",paddingTop:"0px",borderRadius:"2%"}}>
        <source src="archi-yoga.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
     {/* <div><div className="main-cont">
        <div className="card">
          <div className="card__content">
            <h1>Archi</h1>
            <h1>/</h1>
            <h1>Yoga</h1>  
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img
              alt=""
              src="https://github.com/sabrine95/haiet/blob/master/yoga/IMG_0304.jpg?raw=true"
            />
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <img
              alt=""
              src="https://github.com/sabrine95/haiet/blob/master/yoga/IMG_0306%20-%20copie.jpg?raw=true"
            />
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            {(props.lang===0)?<h2>
            « Le Yoga est une lumière, qui une fois allumée, ne faiblit pas. Plus vous pratiquez,
plus la flamme est brillante. » 
            </h2>
 :
            (props.lang===1)?<h2>
            "اليوغا هي ضوء لا يتلاشى بمجرد أن يضيء. كلما تدربت أكثر ، كانت الشعلة أكثر إشراقًا. »
            </h2>
             :
            <h2>
           “Yoga is a light, which once lit, does not fade. The more you practice, the brighter the flame. »
            </h2>
             
            
          }
          <h3>— BKS Iyengar</h3>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
          {(props.lang===0)?
            <h2>
            Pratiquer l’achi - yoga c’est méditer dans l’action, c’est sentir l’instant présent.
            </h2>
              :

            (props.lang===1)?<h2>
            ممارسة اليوغا هي التأمل في العمل ، هو الشعور باللحظة الحالية.            </h2>
             :
            <h2>Practice achi - yoga is to meditate in action, it is to feel the present moment.
            </h2>    
          }
           
           </div>
 
        </div>
        
        <div className="card">
          <div className="card__image">
            <img
              alt=""
              src="https://github.com/sabrine95/haiet/blob/master/yoga/IMG_0241%20-%20copie.jpg?raw=true"
            />
          </div>
        </div>


        <div className="card">
          <div className="card__image">
            <img
              alt=""
              src="https://github.com/sabrine95/haiet/blob/master/yoga/IMG_0306%20-%20copie.jpg?raw=true"
            />
          </div>
        </div>
        <div className="card">
          <div className="card__content">
          {(props.lang===0)?
           <h2>
            
           C’est l’Espace de Conscience qui accueille tout ce qui Est, même l’inspire et l’expire
qui peuvent être suspendus par moments.
           </h2>
              :

            (props.lang===1)?<h2>
           إنه فضاء الوعي الذي يرحب بكل ما شي ، حتىالإستنشاق والزفيره والذي يمكن تعليقهفي بعض الأحيان.      </h2>
             :
            <h2>It is the Space of Consciousness that welcomes all that Is, even inhaling and exhaling it which can be suspended at times.
            </h2>    
          }
            
          </div>
        </div>

        <div className="card">
          <div className="card__content">
          {(props.lang===0)?
           <h2>
           Archi-Yoga transforme la vie, la pratiquer permet de se connaitre et par la présence
qu’elle exige de changer en profondeur. 
           </h2>
              :

            (props.lang===1)?<h2>
          تعمل أرشي يوجا على تغيير الحياة ، حيث تسمح لك ممارستها بمعرفة نفسك ومن خلال الحضور الذي يتطلبه التغيير في العمق</h2>
             :
            <h2>Archi-Yoga transforms life, practicing it allows you to know yourself and by the presence it requires to change in depth.
            </h2>    
          }
           
          </div>
        </div>
        
        <div className="card">
          <div className="card__image">
            <img
              alt=""
              src="https://github.com/sabrine95/haiet/blob/master/yoga/IMG_0241%20-%20copie.jpg?raw=true"
            />
          </div>
        </div>

        <div className="card">
          <div className="card__image">
            <img
              alt=""
              src="https://github.com/sabrine95/haiet/blob/master/yoga/IMG_0306%20-%20copie.jpg?raw=true"
            />
          </div>
        </div>
        <div className="card">
          <div className="card__content">
          {(props.lang===0)?
          <h2>
          Le plus important n’est pas d’avoir une
connaissance intellectuelle de cette pratique mais de la Vivre ici et maintenant
          </h2>
              :

            (props.lang===1)?<h2>
          أهم شيء ليس أن تكون لديك معرفة فكرية بهذه الممارسة ولكن أن تعيشها هنا والآن  </h2>          :
            <h2>The most important thing is not to have an intellectual knowledge of this practice but to live it here and now
            </h2>    
          }
            
          </div>
        </div>

        <div className="card">
          <div className="card__content">
          {(props.lang===0)?
           <h2>
           Et Lao-Tseu- dans le fameux livre le Tao a écrit :
« Un voyage de mille lieues commence toujours par un premier pas. »
           </h2>
              :

            (props.lang===1)?<h2>
        كتب لاو تزو في الكتاب الشهير لاو:
"رحلة الألف ميل تبدأ دائمًا بالخطوة الأولى. »</h2>          :
            <h2>And Lao-Tseu- in the famous book the Tao wrote:
            “A journey of a thousand miles always begins with a first step. »
            </h2>    
          }
           
           
          </div>
        </div>
        
        <div className="card">
          <div className="card__image">
            <img
              alt=""
              src="https://github.com/sabrine95/haiet/blob/master/yoga/IMG_0241%20-%20copie.jpg?raw=true"
            />
          </div>
        </div>




        
  
        
       
      </div>
    </div>
        */}
        </div>
  );
};

export default Archiyoga;
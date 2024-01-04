import React,{useEffect} from 'react'
import './video.css'

const Video = (props) => {
  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  return (
    <div className='video-container'>
      <spam style={{marginTop:"0",paddingTop:"0"}}>{(props.lang===0)? 'Vidéo':(props.lang===1)? 'فيديو':"Video"}</spam>
      
      <div className='video-container-2'>
        <h1>Haïet pratique de yoga Iyengar sur les cotes de carthage</h1>
      <div className='video-display'>
      <iframe width="500" height="315" src="https://www.youtube.com/embed/SKjlDLeYxVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>



      <dv>
        <h1>Haïet pratique yoga Iyengar au château de fonbonne à Évian les bains</h1>

      <div className='video-display'>
      <iframe width="500" height="315" src="https://www.youtube.com/embed/Q6C1WiCmvnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </dv>
     
     
      <dv>
        <h1>Sirsasana</h1>
      <div className='video-display'>
      <iframe width="500" height="315" src="https://www.youtube.com/embed/6_wJMU3LR2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="500" height="315" src="https://www.youtube.com/embed/kD9x3DPfCRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="500" height="315" src="https://www.youtube.com/embed/0Y0cpUc-n3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </dv>


      <dv>
        <h1>Stage du Printemps</h1>
      <div className='video-display'>
      <iframe width="320" height="560" src="https://www.youtube.com/embed/9sOJigQuuTE" title="VID stage printemps 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </dv>


      <dv>
        <h1>Stage du Hiver</h1>
      <div className='video-display'>
      <iframe width="320" height="500" src="https://www.youtube.com/embed/DxHVqgBwohg" title="VID stage hiver 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
      <iframe width="320" height="500" src="https://www.youtube.com/embed/73rhMamphho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      </div>
      </dv>

      <dv>
        <h1>21 juin Journéé mondiale du Yoga</h1>
      <div className='video-display'>
      <iframe width="320" height="500" src="https://www.youtube.com/embed/2lu7M2fwrJI" title="VID journée mondiale yoga 21 22" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </dv>


      <dv>
        <h1>HOMMAGE À  FAEQ BIRIA</h1>
      <div className='video-display'>
      <iframe width="500" height="315" src="https://www.youtube.com/embed/8w5mxthUB0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </dv>
      

    </div>
  )
}

export default Video
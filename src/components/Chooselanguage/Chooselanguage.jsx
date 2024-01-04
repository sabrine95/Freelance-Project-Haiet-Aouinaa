import {React,useEffect,useState} from 'react'
import './Chooselanguage.css'

const Chooselanguage = (props) => {
 
  const [xx,setxx]=useState(["EN","AR","FR"])
  const[showlanguages,setshowlanguages]=useState({visibility: "hidden"})
  useEffect(()=>{
    props.setlang(
      (xx[0]=="FR")? 0 : (xx[0]=="AR")? 1 :3
    )
  },xx)
  const fun1=()=>{
    setxx([xx[1],xx[0],xx[2]]) 
    setshowlanguages({visibility:"hidden"})
  }
  const fun2=()=>{
    setxx([xx[2],xx[1],xx[0]])
    setshowlanguages({visibility:"hidden"})
  }

  return (
    <div className='Chooselanguage-container'>
      <div className='top-pyramid' onClick={()=>setshowlanguages({visibility: "visible"})}>{(props.lang=="0")? "FR":(props.lang=="1")? "AR":"EN"}</div>
      <div style={showlanguages}  className='below-top-pyramid' onClick={fun1}>{xx[1]}</div>
      <div style={showlanguages} className='below-top-pyramid' onClick={fun2}>{xx[2]}</div>
    </div>
  )
}

export default Chooselanguage
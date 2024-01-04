import React from 'react'
import '../style.css'
import './courparticulier.css'

const Courparticulier = (props) => {
  return (
    <div>
        <div>{(props.lang===0)? <h1 style={{paddingTop:"0"}}>Cour Particuliers</h1>:(props.lang===1)? <h1 style={{paddingTop:"0"}}>دروس خصوصية </h1>: <h1 style={{paddingTop:"0"}}>Private lessons</h1>}</div>
        
        <div className='description-cour-particulier'>
        {(props.lang===0)? <p>Si vous recherchez un suivi plus personnalisé, une adaptation des postures et exercices liée à vos besoins et votre personnalité ainsi qu'un moment de partage plus intimiste, je vous conseille d'opter pour des cours particuliers. </p> :
        (props.lang===1)? <p>.إذا كنت تبحث عن متابعة خاصة،وتكييف التمارين حسب إحتياجاتك الخاصة، أنصحك باختيار الدروس الخصوصية.</p>:
        <p>If you are looking for a more personalized follow-up, an adaptation of postures and exercises related to your needs and your personality as well as a more intimate moment of sharing, I advise you to opt for private lessons.</p>}
        {(props.lang===0)? <p>Les cours peuvent être dispensés en Français ou en Anglais.</p>:
        (props.lang===1)? <p>يمكن تقديم الدروس باللغة الفرنسية أو الإنجليزية.</p>:
        <p>Classes can be given in French or English.</p>
    }
        </div>
        
        <div className='court-particulier-prix-container'>
            <div className='court-particulier-prix-container-child'>
                <h2>Cours particulier - 50€</h2>
                <h3>Cours réguliers de 60 minutes</h3>
            </div>
            <div className='court-particulier-prix-container-child'>
                <h2>Forfait 5 cours - 225€</h2>
                <h3>Pass de 5 cours de 60 minutes, valable 6 mois</h3>
            </div>
            <div className='court-particulier-prix-container-child'>
                <h2>Offre premier cours - 40€</h2>
                <h3>Cours d'essai de 60 minutes</h3>
            </div>
            <div className='court-particulier-prix-container-child'>
                <h2>Forfait 10 cours - 400€</h2>
                <h3>Pass de 10 cours de 60 minutes, valable 1 an</h3>
            </div>

        </div>

    </div>
  )
}

export default Courparticulier
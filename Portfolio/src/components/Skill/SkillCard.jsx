import React from 'react'
import '../../assets/styles/SkillCard.css'

const SkillCard = ({isActive,title,onClick,iconUrl}) => {
  return (
    <div  
    className={`skill-card ${isActive ? "active" : ""}`}
    onClick={()=>onClick()}
    >
        <div className='skill-icon'>
            <img src={iconUrl} alt={title}></img>
        </div>
        <span>{title}</span>
      
    </div>
  )
}

export default SkillCard

import React, { useState } from 'react'
import '../../assets/styles/Skillsection.css'
import SkillCard from './SkillCard'
import { SKILLS } from '../../utils/data'
import SkillInfocard from './SkillInfocard'
const SkillSection = () => {
    const [selectedSkill,SetSelectedSkill] = useState(SKILLS[0]);

    const handleselectSkill = (data) =>{
        SetSelectedSkill(data)
    }
  return (
    <section className='skill-container'>
        <h5>Technical Mastery</h5>
        <div className='skill-content' >
            <div className='skill'>
                {
                    SKILLS.map((item)=>(
                        <SkillCard key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={()=>{
                            handleselectSkill(item)
                        }}
                        />
                    ))
                }
            </div>
            <div className='skill-info'>
                <SkillInfocard 
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default SkillSection

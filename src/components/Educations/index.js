import React from 'react'
import { education } from '../../contents/informations'
import './educations.scss';

const Educations = () => {
  return (
    <div className='educations'>
        {education.map((index,key)=>(
            <div key={key}>
                <span className='educations__years'>{index.years}</span>
                <span className='educations__title'>{index.name}</span>
                <span className='educations__company'>{index.institution}</span>
            </div>
        ))}
    </div>
  )
}

export default Educations
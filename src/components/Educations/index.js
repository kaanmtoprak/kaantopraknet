import React from 'react'
import './educations.scss';
import { education } from '../../utilities/contents';

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
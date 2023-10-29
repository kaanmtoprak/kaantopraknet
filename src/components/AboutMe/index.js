import React from 'react'
import './about-me.scss';
import { aboutMe } from '../../contents/informations';

const AboutMe = () => {

  return (
    <div className='about-me'>
        <p className='about-me__bio'>
            {aboutMe?.bio}
        </p>
        <div className='about-me__info'>
        {
                aboutMe.info.map((index,key)=>(
                    <div className='about-me__info__element' key={key}>
                        <span className='name'>{index.name}</span> : 
                        <span className='value'>{index.value}</span> 

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AboutMe
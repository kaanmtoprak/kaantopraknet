import React from 'react'
import './skills.scss';
import { skills } from '../../contents/informations';
// import ProgressBar from '../ProgressBar';
import {ProgressBar} from '../index';

const Skills = () => {
  return (
    <div className='skills'>
        {
            skills.map((index,key)=>(
                <div key={key}>
                    <span className='skills__name'>{index.skill}</span>
                    <ProgressBar percentage={index.percentage}/>
                </div>
            ))
        }
    </div>
  )
}

export default Skills
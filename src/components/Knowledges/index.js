import React from 'react'
import './knowledges.scss';
import { knowledges } from '../../contents/informations';


const Knowledges = () => {
  return (
    <div className='knowledges'>
        {
            knowledges.map((index,key)=>(
                <div key={key}>
                    <i className='icon-check'></i>
                    <span className='knowledges__name'>{index.knowledge}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Knowledges
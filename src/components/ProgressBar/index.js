import React from 'react'
import './progress-bar.scss';

const ProgressBar = ({percentage}) => {
  return (
    <div className='progress-bar'>
        <div style={{width:`${percentage}%`}} className='progress-bar__percentage'></div>
    </div>
  )
}

export default ProgressBar
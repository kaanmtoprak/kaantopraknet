import React from 'react'
import './profile.scss';


const Profile = () => {
  
  return (
    <div className='profile'>
        <div className="profile__content">
            <figure>
                <img src="/images/profile.jpeg" alt="profile"/>
            </figure>
            <div className='profile__content__informations'>
                <span className='name'>Mehmet Kaan Toprak</span>
                <span className='title'>Frontend | MERN-Stack Developer</span>
            </div>
        </div>
        <div className="profile__social">
            <a href="https://github.com/kaanmtoprak" target='_blank' rel="noreferrer"><i className='icon-github'></i></a>
            <a href="https://www.linkedin.com/in/kaanmtprk/" target='_blank' rel="noreferrer"><i className='icon-linkedin'></i></a>
            <a href="https://twitter.com/kaanmehtprk" target='_blank' rel="noreferrer"><i className='icon-twitter'></i></a>
            <a href="https://www.instagram.com/mehkaandev" target='_blank' rel="noreferrer"><i className='icon-instagram'></i></a>
        </div>
        <div className="profile__actions">
            <a href='cv/en-kt.pdf' download>Download CV</a>
        </div>

    </div>
  )
}

export default Profile
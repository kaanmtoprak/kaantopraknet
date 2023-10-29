import React from 'react'
import './profile.scss';


const Profile = () => {
  
  return (
    <div className='profile'>
        <div className="profile__content">
            <figure>
                <img src="/images/profile.jpeg" alt="profile" priority/>
            </figure>
            <div className='profile__content__informations'>
                <span className='name'>Mehmet Kaan Toprak</span>
                <span className='title'>Frontend | MERN-Stack Developer</span>
            </div>
        </div>
        <div className="profile__social">
            <a href="google.com" target='_blank'><i className='icon-github'></i></a>
            <a href="google.com" target='_blank'><i className='icon-linkedin'></i></a>
            <a href="google.com" target='_blank'><i className='icon-twitter'></i></a>
            <a href="google.com" target='_blank'><i className='icon-instagram'></i></a>
        </div>
        <div className="profile__actions">
            <span>Download CV</span>
        </div>

    </div>
  )
}

export default Profile
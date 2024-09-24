import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

const Profile = () => {
    return (
        <>
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='colz'>
                            <div className='colz-icon'>
                                <a href='https://www.linkedin.com/in/sanjeeth-kamireddi-a32800220/' target="_blank">
                                    <i className='fa fa-linkedin-square'></i>
                                </a>
                                <a href='https://www.instagram.com/kamireddisanjeeth/' target="_blank">
                                    <i className='fa fa-instagram'></i>
                                </a>
                                <a href='https://github.com/SanjeethKamireddi' target="_blank">
                                    <i className='fa fa-github'></i>
                                </a>
                            </div>
                        </div>
                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello, I'M <span className='highlighted-text'>
                                    Sanjeeth
                                </span>
                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Enthusiastic Dev 🔴",
                                            800,
                                            "Software Developer 😎",
                                            800,
                                            "Cross Platform Dev 🌐",
                                            800,
                                            "React/Java Dev 💻",
                                            800,
                                        ]}
                                    />
                                </h1>
                                <span className='profile-role-tagline'>
                                    Build your applications with front & back end operations
                                </span>
                            </span>
                        </div>
                        <div className='profile-options'>
                            {/* <button className='btn primary-btn'>
                                {""}
                                Hire Me {" "}
                            </button> */}
                            <a href='SanjeethResume.pdf' download="Sanjeeth resume.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
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
                               
                            </div>
                        </div>
                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                Hello, I'M <span className='highlighted-text'>
                                    Akhil
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
                                            "Full Stack Dev 🌐",
                                            800,
                                            "Angular/Java Dev 💻",
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
                            <a href='AkhilGajula_Resume.pdf' download="Akhil resume.pdf">
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
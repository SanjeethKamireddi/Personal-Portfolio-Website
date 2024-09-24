import React from 'react'
import './AboutMe.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

const AboutMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "Software Developer with 2.5 years of experience. I've completed my education in CSE from VIT University.",
        highlights: {
            bullets: [
                "Software Developer",
                "Interactive Frontend as per the design",
                "Redux for State Management",
                "Building REST API's",
                "Managing Database"
            ],
            heading: "Here are a Few Highlights: "
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'>
                    </div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>
                            {SCREEN_CONSTANTS.description}
                        </span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {
                                renderHighlights()
                            }
                        </div>
                        <div className='about-me-options'>
                            {/* <button className='btn primary-btn'>
                                {""}
                                Hire Me {" "}
                            </button> */}
                            <a href='SanjeethResume.pdf' download="Sanjeeth resume.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
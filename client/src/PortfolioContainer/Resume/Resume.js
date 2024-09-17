import React, { useState } from 'react'
import './Resume.css'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    const resumeBullets = [
        {
            label: "Education",
            logoSrc: "education.svg"
        },
        {
            label: "Work History",
            logoSrc: "work-history.svg"
        },
        {
            label: "Programming Skills",
            logoSrc: "programming-skills.svg"
        },
        {
            label: "Projects",
            logoSrc: "projects.svg"
        },
        {
            label: "Interests",
            logoSrc: "interests.svg"
        },
    ]

    const programmingSkillDetails = [
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "Angular", ratingPercentage: 85 },
        { skill: "React Js", ratingPercentage: 75 },
        { skill: "HTML", ratingPercentage: 90 },
        { skill: "CSS", ratingPercentage: 90 },
        { skill: "Java", ratingPercentage: 70 },
        { skill: "SQL", ratingPercentage: 70 },
    ]

    const projectDetails = [
        {
            title: "PEER ARCHITECT",
            description: " An online platform designed to help companies build, analyze, and monitortheir executive compensation and/or performance peer groups.",
            subHeading: "Technologies Used: Java Springboot, Angular, SQL server"
        },
        {
            title: "ESG CORPORATE RATING",
            description: "It is an application where corporate ratings are used to evaluate the sustainability and ethical impact of a company’s operations.",
            subHeading: "Technologies Used: Java Springboot, Angular, SQL server"
        },
    ]

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            
            <ResumeHeading
                heading={"Vellore Institute Of Technology, Vellore"}
                subHeading={"BACHELOR OF ENGINEERING IN COMPUTER SCIENCE"}
                fromDate={"2019"}
                toDate={"2023"}
            />
           
        </div>,
        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Institutional Shareholder Services"}
                    subHeading={"SOFTWARE DEVELOPER"}
                    fromDate={"January 2023"}
                    toDate={"Present"}
                />
                
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Developed various single page applications using Angular, Java Spring boot, Sql server. Analyzed problem
                        statement and investigated problem areas.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Created visually appealing charts and graphs using D3.js, javascript library.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Currently leveraging React.js to build responsive and highly interactive front-end interfaces. </span>
                    <br />
                    
                </div>
            </div>
        </div>,
        /* PROGRAMMING SKILLS */
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* Application SKILLS */
        //    <div className="resume-screen-container application-skills-container" key="application-skills">
        //      {applicationSkillsDetails.map((skill, index) => (
        //        <div className="skill-parent" key={index}>
        //          <div className="heading-bullet"></div>
        //          <span>{skill.skill}</span>
        //          <div className="skill-percentage">
        //            <div
        //              style={{ width: skill.ratingPercentage + "%" }}
        //              className="active-percentage-bar"
        //            ></div>
        //          </div>
        //        </div>
        //      ))}
        //    </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {
                projectDetails.map((projectsDetails, index) => (
                    <ResumeHeading
                        key={index}
                        heading={projectsDetails.title}
                        subHeading={projectsDetails.subHeading}
                        description={projectsDetails.description}
                    />
                ))
            }
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Football"
                description="Love to play football with friends during free times."
            />
            <ResumeHeading
                heading="Travelling"
                description="Exploring new places, cultures, traditions. Travelling freshen-ups the mind."
            />
        </div>,
    ];


    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarouselOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carouselOffSetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };
    return (
        <>
            <div className="resume-container screen-container " id={props.id || ""}>
                <div className="resume-content">
                    <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                    <div className="resume-card">
                        <div className="resume-bullets">
                            <div className="bullet-container">
                                <div className="bullet-icons"></div>
                                <div className="bullets">{getBullets()}</div>
                            </div>
                        </div>
                        <div className="resume-bullet-details">{getResumeScreens()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume

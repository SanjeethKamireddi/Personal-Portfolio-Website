import React, { useState } from 'react'
import Typical from 'react-typical'
import './ContactMe.css'
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import axios from 'axios'
import { toast } from 'react-toastify'

const ContactMe = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [banner, setBanner] = useState("")
    const [message, setMessage] = useState("")
    const [bool, setBool] = useState(false)

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true)
            const res = await axios.post('/contact', data)
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            } else if (res.status === 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error)

        }
    };
    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading
                title={'Contact Me'}
                subHeading={'Keep In Touch'}
            />
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Get In Touch 📧",
                                1000,
                                "Share Experience 📞",
                                1000
                            ]}
                        />
                    </h2>
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
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="Imgae not found" />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label className='' htmlFor='name'>Name</label>
                        <input type="text" value={name} name='name'
                            onChange={(e) => setName(e.target.value)} />
                        <label className='' htmlFor='email'>Email</label>
                        <input type="text" value={email} name='email'
                            onChange={(e) => setEmail(e.target.value)} />
                        <label className='' htmlFor='message'>Message</label>
                        <textarea type="text" value={message} name='message'
                            onChange={(e) => setMessage(e.target.value)} />
                        <div className='send-btn'>
                            <button type='submit'>
                                Send
                                <i className='fa fa-paper-plane' />
                                {bool ? (<b className='load'>
                                    <img src={load1} alt='image not responding' />
                                </b>) : ("")}

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
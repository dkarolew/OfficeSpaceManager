import React, {useContext, useState} from 'react';
import NavBar from "../components/NavBar";
// @ts-ignore
import styled from "styled-components";
import LoginWrapper from "../components/LoginWrapper";
import {UserContext} from "../utils/UserContext";

const ContactPage = () => {

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    const [imageNumber, setImageNumber] = useState(0);
    const images = ["close_email.png", "open_email.png"];

    const changeImage = () => {
        setImageNumber(imageNumber === 0 ? 1 : 0);
    }

    return (
        <LoginWrapper isLoggedIn={userInfo.isLoggedIn}>
            <NavBar/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{paddingTop: '80px', paddingLeft: '30px'}}>
                    <h2 style={{textAlign: 'left'}}>CONTACT</h2>
                    <p style={{textAlign: 'left', paddingTop: '20px'}}>
                        If you have any questions or problems with application
                        feel free to send us email via email below.
                    </p>
                    <h3 style={{textAlign: 'left', paddingTop: '50px'}}>officespacemeneger@gmail.com</h3>
                    <SlideShowDiv onAnimationIteration={changeImage} style={{paddingTop: '30px', paddingLeft: '50px'}}>
                        <img src={images[imageNumber]} alt={'email'}/>
                    </SlideShowDiv>
                </div>
                <div style={{paddingTop: '300px', paddingLeft: '300px'}}>
                    <img src="contact-us.jpg" alt={'contact-us'}/>
                </div>
            </div>
        </LoginWrapper>
    )
}

const SlideShowDiv = styled.div`
    animation: fade-in 3s infinite;
    animation-timing-function: ease-in-out;
    position: relative;
    paddingTop: 20px;

    @keyframes fade-in {
    0% { 
        opacity: 0;
        top: 20vh;
    }
    20%,
    80% { 
        opacity: 1;
        top: 5vh;
    }
    100% {
        opacity: 0;
        top: 10vh;
    }
}
`;


export default ContactPage
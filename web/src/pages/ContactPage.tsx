import React from 'react';
import NavBar from "../components/NavBar";


const ContactPage = () => {

    return (
        <>
            <NavBar />
            <div style={{paddingTop: '80px', paddingLeft: '30px'}}>
                <h2 style={{textAlign: 'left'}}>CONTACT</h2>
                <p style={{textAlign: 'left', paddingTop: '20px'}}>
                    If you have any questions or problems with application
                    feel free to send us email via link below.
                </p>
                <div style={{paddingTop: '10px'}}>
                    <a href = "mailto:officespacemeneger@gmail.com">
                        Contact us
                    </a>
                </div>
            </div>
        </>
    )
}

export default ContactPage
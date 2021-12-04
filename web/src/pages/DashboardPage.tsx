import React from 'react';
import NavBar from "../components/NavBar";
import CommentsSection from "../components/CommentsSection";


const DashboardPage = () => {

    return (
        <>
            <NavBar />
            <div style={{paddingTop: '80px', paddingLeft: '30px'}}>
                <h2 style={{textAlign: 'left'}}>DASHBOARD</h2>
                <p style={{textAlign: 'left', paddingTop: '20px'}}>
                    Here you can view your current reservations and manage them.
                </p>
            </div>
            <CommentsSection/>
        </>
    )
}

export default DashboardPage
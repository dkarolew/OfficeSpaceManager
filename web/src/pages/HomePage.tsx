import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TwoPanelContainer from "../components/TwoPanelContainer";
import ReservationForm from "../components/ReservationForm";
import ReservationGridContainer from "../components/ReservationGridContainer";
import React from "react";


const HomePage = () => {

    return (
        <div>
            <NavBar />
            <Header />
            <TwoPanelContainer
                leftPanel={<ReservationGridContainer/>}
                rightPanel={<ReservationForm/>}
            />
        </div>
    )
}

export default HomePage
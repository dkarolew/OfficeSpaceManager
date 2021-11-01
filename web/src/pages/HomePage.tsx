import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TwoPanelContainer from "../components/TwoPanelContainer";
import ReservationGrid from "../components/ReservationGrid";
import ReservationForm from "../components/ReservationForm";
import SectorList from "../components/SectorList";
import React from "react";


const HomePage = () => {

    return (
        <div>
            <NavBar />
            <Header />
            <TwoPanelContainer
                leftPanel={<ReservationGrid/>}
                rightPanel={<ReservationForm/>}
            />
            <SectorList/>
        </div>
    )
}

export default HomePage
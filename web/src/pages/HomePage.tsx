import NavBar from "../components/NavBar";
import Header from "../components/Header";
import TwoPanelContainer from "../components/TwoPanelContainer";
import ReservationForm from "../components/ReservationForm";
import ReservationGridContainer from "../components/ReservationGridContainer";
import React, {useContext} from "react";
import {UserContext} from "../utils/UserContext";
import LoginWrapper from "../components/LoginWrapper";
import AdminForm from "../components/AdminForm";


const HomePage = () => {

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    return (
        <LoginWrapper isLoggedIn={userInfo.isLoggedIn}>
            <NavBar/>
            <Header/>
            <TwoPanelContainer
                leftPanel={<ReservationGridContainer/>}
                rightPanel={userInfo.role === 'USER' ? <ReservationForm/> : <AdminForm/>}
            />
        </LoginWrapper>
    )
}

export default HomePage
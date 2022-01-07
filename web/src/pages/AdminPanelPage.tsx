import React, {useContext} from 'react';
import NavBar from '../components/NavBar';
import TwoPanelContainer from '../components/TwoPanelContainer';
import ControlPanel from '../components/ControlPanel';
import StatisticPanel from '../components/StatisticPanel';
import LoginWrapper from "../components/LoginWrapper";
import {UserContext} from "../utils/UserContext";
// @ts-ignore
import { useHistory } from "react-router-dom";

const AdminPanelPage = () => {

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    const history = useHistory();

    return (
        <LoginWrapper isLoggedIn={userInfo.isLoggedIn}>
            {userInfo.role === 'ADMIN' ? (
                <>
                    <NavBar/>
                    <TwoPanelContainer
                        leftPanel={<ControlPanel/>}
                        rightPanel={<StatisticPanel/>}
                    />
                </>
            ) : (
                history.push("/")
            )}
        </LoginWrapper>
    )
}

export default AdminPanelPage
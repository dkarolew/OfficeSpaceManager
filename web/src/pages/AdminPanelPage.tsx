import React from 'react';
import NavBar from '../components/NavBar';
import TwoPanelContainer from '../components/TwoPanelContainer';
import ControlPanel from '../components/ControlPanel';
import StatisticPanel from '../components/StatisticPanel';


const AdminPanelPage = () => {

    return (
        <>
            <NavBar />
            <TwoPanelContainer
                leftPanel={<ControlPanel/>}
                rightPanel={<StatisticPanel/>}
            />
        </>
    )
}

export default AdminPanelPage
import React from "react";
import SectorList from "./SectorList";


const ControlPanel = () => {

    return (
        <div style={{paddingTop: '80px', paddingLeft: '30px'}}>
            <h2 style={{textAlign: 'left'}}>ADMIN PANEL</h2>
            <p style={{textAlign: 'left', paddingTop: '20px'}}>
                This is admin panel where you can track statistics on
                how the system is working and generate reports. You can
                also manage <br/> your system from this panel here.
            </p>
            <div style={{paddingTop: '30px'}}>
                <a className="btn btn-primary" href='http://localhost:8080/api/v1/reports/generate' download>
                    Download reservation report
                </a>
            </div>
            <SectorList />
        </div>
    )
}

export default ControlPanel
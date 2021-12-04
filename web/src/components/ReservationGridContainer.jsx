import Select from 'react-dropdown-select';
import React, {useState} from 'react';
import ReservationGrid from "./ReservationGrid";

const ReservationGridContainer = () => {

    const floorsOptions = [
        { value: 0, label: 'Ground floor' },
        { value: 1, label: 'Floor 1' },
        { value: 2, label: 'Floor 2' },
        { value: 3, label: 'Floor 3' },
    ];
    const [floor, setFloor] = useState(0);

    return (
        <div style={{margin: '60px'}}>
            <h3 style={{textAlign: 'center'}}>RESERVATION GRID</h3>
            <div style={{paddingTop: '30px'}}>
                <Select
                    style={{width: '30%'}}
                    disabled={false}
                    onChange={(floor) => setFloor(floor[0].value)}
                    options={floorsOptions}
                    value={floor}
                />
            </div>
            <ReservationGrid floor={floor}/>
        </div>
    )
}

export default ReservationGridContainer
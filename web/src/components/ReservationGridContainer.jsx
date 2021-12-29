import Select from 'react-dropdown-select';
import React, {useState} from 'react';
import GroundFloor from "./GroundFloor";
import Floor1 from "./Floor1";
import Floor2 from "./Floor2";
import Floor3 from "./Floor3";

const ReservationGridContainer = () => {

    const now = new Date().toISOString().substr(0, 10);

    const floorsOptions = [
        { value: 0, label: 'Ground floor' },
        { value: 1, label: 'Floor 1' },
        { value: 2, label: 'Floor 2' },
        { value: 3, label: 'Floor 3' },
    ];
    const [floor, setFloor] = useState(0);
    const [date, setDate] = useState(now);

    const renderGridForFloor = (floor) => {
        switch(floor) {
            case 0:
                return <GroundFloor date={date}/>;
            case 1:
                return <Floor1 date={date}/>;
            case 2:
                return <Floor2 date={date}/>;
            case 3:
                return <Floor3 date={date}/>;
            default:
                return <GroundFloor date={date}/>;
        }
    }

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
                    values={[]}
                />
            </div>
            <div style={{paddingTop: '10px'}}>
                <input
                    type='date'
                    style={{width: '30%'}}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            {renderGridForFloor(floor)}
        </div>
    )
}

export default ReservationGridContainer
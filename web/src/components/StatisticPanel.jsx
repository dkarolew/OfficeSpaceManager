import React, {useEffect, useState} from "react";
import {Cell, Legend, Pie, PieChart} from "recharts";
import axios from "axios";

const StatisticPanel = () => {

    const place_colors = ["#bb0000", "#007700", "#000000"]
    const eq_colors = ["#000077", "#ff6600", "#612214"]

    const [places, setPlaces] = useState([]);
    const [equipment, setEquipment] = useState([]);

    const now = new Date().toISOString().substr(0, 10);

    useEffect(() => {
        fetchPlacesInDate(now);
    }, [places, now])

    useEffect(() => {
        fetchCurrentEquipment();
    }, [equipment])

    const fetchPlacesInDate = async (date) => {
        return axios.get(`http://localhost:8080/api/v1/places/in/${date}`)
            .then(response => setPlaces(response.data));
    }

    const fetchCurrentEquipment = async () => {
        return axios.get(`http://localhost:8080/api/v1/equipment/now`)
            .then(response => setEquipment(response.data));
    }

    function filterFree(v) {
        return v.state === 'FREE'
    }

    function filterReserved(v) {
        return v.state === 'BUSY'
    }

    function filterDisabled(v) {
        return v.state === 'DISABLED'
    }

    function filterMonitor(v) {
        return v.type === 'MONITOR'
    }

    function filterKeyboard(v) {
        return v.type === 'KEYBOARD'
    }

    function filterMouse(v) {
        return v.type === 'MOUSE'
    }

    const place_data = [
        {
            "name": "Reserved",
            "value": places.filter(filterReserved).length
        },
        {
            "name": "Free",
            "value": places.filter(filterFree).length
        },
        {
            "name": "Not available",
            "value": places.filter(filterDisabled).length
        },
    ];

    const eq_data = [
        {
            "name": "Monitor",
            "value": equipment.filter(filterMonitor).length
        },
        {
            "name": "Keyboard",
            "value": equipment.filter(filterKeyboard).length
        },
        {
            "name": "Mouse",
            "value": equipment.filter(filterMouse).length
        },
    ];

    return (
        <>
            <div style={{paddingTop: '80px'}}>
                <h3>Today's booking status</h3>
                <div style={{paddingTop: '40px'}}>
                    <PieChart width={400} height={400} style={{paddingTop: '20px'}}>
                        <Pie data={place_data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} innerRadius={50} fill="#bb0000" label>
                            {place_data.map((entry, index) => <Cell fill={place_colors[index % place_colors.length]}/>)}
                        </Pie>
                        <Legend verticalAlign="top" height={36}/>
                    </PieChart>
                </div>
                <div style={{paddingTop: '40px'}}>
                    <PieChart width={400} height={400}>
                        <Pie data={eq_data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} innerRadius={50} fill="#bb0000" label>
                            {eq_data.map((entry, index) => <Cell fill={eq_colors[index % eq_colors.length]}/>)}
                        </Pie>
                        <Legend verticalAlign="top" height={36}/>
                    </PieChart>
                </div>
            </div>
        </>
    )
}

export default StatisticPanel
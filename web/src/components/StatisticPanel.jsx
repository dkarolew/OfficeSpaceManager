import React from "react";
import {Cell, Legend, Pie, PieChart} from "recharts";

const StatisticPanel = () => {

    const place_colors = ["#bb0000", "#00bb00", "#000000", "#ffbb00"]
    const eq_colors = ["#bb00bb", "#ff7a71", "#612214"]

    const place_data = [
        {
            "name": "Reserved",
            "value": 400
        },
        {
            "name": "Free",
            "value": 350
        },
        {
            "name": "Not available",
            "value": 200
        },
        {
            "name": "During reservation",
            "value": 100
        }
    ];

    const eq_data = [
        {
            "name": "Monitor",
            "value": 13
        },
        {
            "name": "Keyboard",
            "value": 4
        },
        {
            "name": "Mouse",
            "value": 7
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
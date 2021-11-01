import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {useState} from 'react';

const ReservationGrid = () => {

    let items = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12'];
    const [reserved, setReserved] = useState({"P1": false, "P2" : false, "P3" : false,
                                                       "P4" : false, "P5" : false, "P6" : false,
                                                       "P7" : false, "P8" : false, "P9" : false,
                                                       "P10" : false,"P11" : false,"P12" : false});

    return (
        <div style={{margin: '60px'}}>
            <p style={{textAlign: 'center'}}>RESERVATION GRID</p>
            <Grid container spacing={2}>
                {items.map((item, index)=>{
                    return <Grid item xs={6} md={4}>
                        <div key={index} onClick={(e => setReserved({...reserved, [e.target.outerText] : !reserved[e.target.outerText]}))}>
                            <Paper style={{backgroundColor: reserved[item] ? 'red' : 'green'}} elevation={5} key={index}>{item}</Paper>
                        </div>
                    </Grid>
                })}
            </Grid>
        </div>
    )
}

export default ReservationGrid
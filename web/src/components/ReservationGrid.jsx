import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {useState} from 'react';

const ReservationGrid = () => {

    let items = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12',
                 'P13' , 'P14', 'P15', 'P16', 'P17', 'P18', 'P19', 'P20', 'P21', 'P22', 'P23', 'P24'];
    let freeSpace = ['P7', 'P8', 'P11', 'P14', 'P17', 'P18'];
    // let room = ['P19', 'P20', 'P22', 'P23'];
    const [reserved, setReserved] = useState({"P1": false, "P2" : false, "P3" : false,
                                                       "P4" : false, "P5" : false, "P6" : false,
                                                       "P7" : false, "P8" : false, "P9" : false,
                                                       "P10" : false,"P11" : false,"P12" : false,
                                                       "P13" : false, "P14" : false, "P15" : false,
                                                       "P16" : false, "P17" : false, "P18" : false,
                                                       "P19" : false, "P20" : false, "P21" : false,
                                                       "P22" : false, "P23" : false, "P24" : false});

    const [test, setTest] = useState(false);

    return (
        <div style={{margin: '60px'}}>
            <p style={{textAlign: 'center'}}>RESERVATION GRID</p>
            <Grid container spacing={5}>
                {items.map((item, index)=>{
                    return (
                        <Grid item xs={6} md={4}>
                            <div key={index} onClick={(e => setReserved({...reserved, [e.target.outerText] : !reserved[e.target.outerText]}))}>
                                <Paper style={{backgroundColor: reserved[item] ? 'red' : 'green', textAlign: 'center'}} elevation={5} key={index}>
                                    {!freeSpace.includes(item) && item}
                                </Paper>
                            </div>
                        </Grid>)
                })}
            </Grid>
            <p></p>
            <Grid item xs={10} md={6}>
                <div onClick={() => setTest(!test)}>
                    <Paper style={{backgroundColor: test ? 'red' : 'green'}}>
                        <p style={{textAlign: 'center', height: '100px', lineHeight: '100px'}}>
                            ROOM
                        </p>
                    </Paper>
                </div>
            </Grid>
        </div>
    )
}

export default ReservationGrid
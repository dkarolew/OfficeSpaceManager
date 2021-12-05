import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";


const Floor3 = () => {

    const items = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12',
        'P13' , 'P14', 'P15', 'P16', 'P17', 'P18', 'P19', 'P20', 'P21', 'P22', 'P23', 'P24'];
    const freeSpace = ['P7', 'P8', 'P11', 'P14', 'P17', 'P18'];
    const [reserved, setReserved] = useState({"P1": false, "P2" : true, "P3" : false,
        "P4" : false, "P5" : false, "P6" : false,
        "P7" : false, "P8" : false, "P9" : true,
        "P10" : true,"P11" : false,"P12" : false,
        "P13" : false, "P14" : false, "P15" : false,
        "P16" : false, "P17" : true, "P18" : false,
        "P19" : true, "P20" : false, "P21" : false,
        "P22" : false, "P23" : true, "P24" : false});

    // const rooms = ['ROOM 1', 'ROOM 2', 'ROOM 3', 'ROOM 4'];
    const [test, setTest] = useState(false);

    return (
        <div style={{paddingTop: '30px'}}>
            <Grid container spacing={5}>
                {items.map((item, index)=>{
                    return (
                        <Grid item xs={4} md={6}>
                            <div key={index} onClick={(e => setReserved({...reserved, [e.target.outerText] : !reserved[e.target.outerText]}))}>
                                <Paper style={{backgroundColor: reserved[item] ? 'red' : 'green', textAlign: 'center', color: 'white'}} elevation={5} key={index}>
                                    {!freeSpace.includes(item) && item}
                                </Paper>
                            </div>
                        </Grid>)
                })}
            </Grid>
        </div>
    )
}

export default Floor3
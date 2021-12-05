import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";


const Floor1 = () => {

    const items = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12',
        'P13' , 'P14', 'P15', 'P16', 'P17', 'P18', 'P19', 'P20', 'P21', 'P22', 'P23', 'P24'];
    const freeSpace = ['P7', 'P8', 'P11', 'P14', 'P17', 'P18'];
    const [reserved, setReserved] = useState({"P1": true, "P2" : false, "P3" : false,
        "P4" : false, "P5" : false, "P6" : false,
        "P7" : true, "P8" : false, "P9" : true,
        "P10" : false,"P11" : true,"P12" : false,
        "P13" : false, "P14" : false, "P15" : true,
        "P16" : true, "P17" : false, "P18" : false,
        "P19" : false, "P20" : true, "P21" : false,
        "P22" : false, "P23" : true, "P24" : false});
    
    // const rooms = ['ROOM 1', 'ROOM 2', 'ROOM 3', 'ROOM 4'];
    const [test, setTest] = useState(false);

    return (
        <div style={{paddingTop: '30px'}}>
            <Grid container spacing={5}>
                {items.map((item, index)=>{
                    return (
                        <Grid item xs={1} md={1}>
                            <div key={index} onClick={(e => setReserved({...reserved, [e.target.outerText] : !reserved[e.target.outerText]}))}>
                                <Paper style={{backgroundColor: reserved[item] ? 'red' : 'green', textAlign: 'center', color: 'white'}} elevation={5} key={index}>
                                    {!freeSpace.includes(item) && item}
                                </Paper>
                            </div>
                        </Grid>)
                })}
            </Grid>
            <div style={{paddingTop: '30px'}}>
                <Grid item xs={10} md={6}>
                    <div onClick={() => setTest(!test)}>
                        <Paper style={{backgroundColor: test ? 'red' : 'green'}}>
                            <p style={{textAlign: 'center', height: '100px', lineHeight: '100px', color: 'white'}}>
                                ROOM
                            </p>
                        </Paper>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default Floor1
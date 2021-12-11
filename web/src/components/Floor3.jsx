import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";


const Floor3 = ({date}) => {

    const items = ['P1', 'P2', 'P3', 'P4'];
    const [reserved, setReserved] = useState({"P1": true, "P2" : false, "P3" : false, "P4" : false});
    const freeSpace = ['P7'];

    return (
        <div className="container" style={{paddingTop: '10px'}}>
            <div className="row" style={{textAlign: 'center'}}>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <Paper style={{height: '90px', lineHeight: '80px'}}>1</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <Paper style={{height: '90px', lineHeight: '80px'}}>1</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <Paper style={{height: '90px', lineHeight: '80px'}}>1</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm" style={{paddingLeft: '50px'}}>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <Paper>1</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>2</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>3</Paper>
                            </Grid>
                            <Grid item xs={5}>
                                <Paper>4</Paper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <Paper style={{height: '90px', lineHeight: '80px'}}>1</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Floor3
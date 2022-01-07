import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";


const GroundFloor = ({date}) => {

    const [places, setPlaces] = useState({});

    useEffect(() => {
        fetchPlacesInDate(date);
    }, [places, date])

    const fetchPlacesInDate = async (date) => {
        return axios.get(`http://localhost:8080/api/v1/places/in/${date}`)
            .then(response => setPlaces(response.data));
    }

    return (
        <div className="container" style={{paddingTop: '10px'}}>
            <div className="row" style={{textAlign: 'center'}}>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[64]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R1
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[0]?.state}>P1</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[1]?.state}>P2</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[2]?.state}>P3</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[3]?.state}>P4</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[4]?.state}>P5</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[5]?.state}>P6</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[6]?.state}>P7</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[7]?.state}>P8</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[65]?.state} style={{height: '90px', lineHeight: '80px'}}>R2</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[8]?.state}>P9</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[9]?.state}>P10</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[10]?.state}>P11</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[11]?.state}>P12</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[12]?.state}>P13</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[13]?.state}>P14</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[14]?.state}>P15</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[15]?.state}>P16</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[16]?.state}>P17</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[17]?.state}>P18</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[18]?.state}>P19</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[19]?.state}>P20</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[20]?.state}>P21</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[21]?.state}>P22</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[22]?.state}>P23</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[23]?.state}>P24</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[24]?.state}>P25</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[25]?.state}>P26</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[26]?.state}>P27</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[27]?.state}>P28</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[28]?.state}>P29</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[29]?.state}>P30</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[30]?.state}>P31</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[31]?.state}>P32</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[32]?.state}>P33</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[33]?.state}>P34</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[34]?.state}>P35</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[35]?.state}>P36</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[66]?.state} style={{height: '90px', lineHeight: '80px'}}>R3</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[36]?.state}>P37</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[37]?.state}>P38</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[38]?.state}>P39</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[39]?.state}>P40</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[40]?.state}>P41</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[41]?.state}>P42</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[42]?.state}>P43</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[43]?.state}>P44</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[44]?.state}>P45</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[45]?.state}>P46</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[46]?.state}>P47</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[47]?.state}>P48</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[48]?.state}>P49</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[49]?.state}>P50</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[50]?.state}>P51</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[51]?.state}>P52</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[52]?.state}>P53</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[53]?.state}>P54</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[54]?.state}>P55</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[55]?.state}>P56</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[56]?.state}>P57</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[57]?.state}>P58</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[58]?.state}>P59</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[59]?.state}>P60</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[60]?.state}>P61</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[61]?.state}>P62</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[62]?.state}>P63</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[63]?.state}>P64</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[67]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R4
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

const StyledPaper = styled(Paper)`
    background-color: ${props => props.state === "FREE" ? "darkgreen" :
    props.state === "DURING_RESERVATION" ? "#CCCC00" :
        props.state === "BUSY" ? "darkred": 'black'};
    color: white;
}
`;

export default GroundFloor
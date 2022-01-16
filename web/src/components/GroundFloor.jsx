import React, {createRef, useContext, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {UserContext} from "../utils/UserContext";


const GroundFloor = ({date}) => {

    const [places, setPlaces] = useState({});

    const arrLength = 68;
    const [elRefs, setElRefs] = React.useState([]);

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    const [userId, setUserId] = useState('');
    const [placePositionList, setPlacePositionList] = useState([]);

    useEffect(() => {
        fetchPlacesInDate(date);
    }, [places, date])


    useEffect(() => {
        setElRefs(elRefs => (
            Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [arrLength]);

    useEffect(() => {
        let places = [];
        if (elRefs[0]) {
            for (let i = 0; i < arrLength; i++) {
                const ref = elRefs[i];
                const rect = ref.current.getBoundingClientRect();
                const xs = Math.floor(rect.x + rect.width / 2);
                const ys = Math.floor(rect.y + rect.height / 2);
                const placeNumber = ref.current.innerText;
                places[i] = {x: xs, y: ys, place: placeNumber};
            }
        }

        if (places.length > 0) {
            const placePositionList = places;
            const userId = userInfo.userId;
            setPlacePositionList(placePositionList);
            setUserId(userId);
        }
    }, [elRefs, userInfo.userId])


    const addPlacesPositions = async (body) => {
        await fetch('http://localhost:8080/api/v1/places/intelligent-reservation', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    }

    const fetchPlacesInDate = async (date) => {
        return axios.get(`http://localhost:8080/api/v1/places/in/${date}`)
            .then(response => setPlaces(response.data));
    }

    return (
        <>
            {userInfo.role === 'USER' ? (
                <div style={{paddingTop: '30px', paddingRight: '20px'}}>
                    <button
                        className='btn btn-block'
                        style={{background: 'darkblue', width: '20%'}}
                        onClick={() => addPlacesPositions({placePositionList, userId, date})}>
                        Reservation for Team
                    </button>
                </div>
            ) : (
                ''
            )}
            <div className="container" style={{paddingTop: '10px'}}>
                <div className="row" style={{textAlign: 'center'}}>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper ref={elRefs[0]} state={places[64]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}>
                                        R1
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[0]?.state} ref={elRefs[1]}>P1</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[1]?.state} ref={elRefs[2]}>P2</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[2]?.state} ref={elRefs[3]}>P3</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[3]?.state} ref={elRefs[4]}>P4</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[4]?.state} ref={elRefs[5]}>P5</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[5]?.state} ref={elRefs[6]}>P6</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[6]?.state} ref={elRefs[7]}>P7</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[7]?.state} ref={elRefs[8]}>P8</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper
                                        state={places[65]?.state}
                                        style={{height: '90px', lineHeight: '80px'}}
                                        ref={elRefs[9]}>R2</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[8]?.state} ref={elRefs[10]}>P9</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[9]?.state} ref={elRefs[11]}>P10</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[10]?.state} ref={elRefs[12]}>P11</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[11]?.state} ref={elRefs[13]}>P12</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[12]?.state} ref={elRefs[14]}>P13</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[13]?.state} ref={elRefs[15]}>P14</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[14]?.state} ref={elRefs[16]}>P15</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[15]?.state} ref={elRefs[17]}>P16</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[16]?.state} ref={elRefs[18]}>P17</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[17]?.state} ref={elRefs[19]}>P18</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[18]?.state} ref={elRefs[20]}>P19</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[19]?.state} ref={elRefs[21]}>P20</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[20]?.state} ref={elRefs[22]}>P21</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[21]?.state} ref={elRefs[23]}>P22</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[22]?.state} ref={elRefs[24]}>P23</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[23]?.state} ref={elRefs[25]}>P24</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[24]?.state} ref={elRefs[26]}>P25</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[25]?.state} ref={elRefs[27]}>P26</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[26]?.state} ref={elRefs[28]}>P27</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[27]?.state} ref={elRefs[29]}>P28</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[28]?.state} ref={elRefs[30]}>P29</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[29]?.state} ref={elRefs[31]}>P30</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[30]?.state} ref={elRefs[32]}>P31</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[31]?.state} ref={elRefs[33]}>P32</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[32]?.state} ref={elRefs[34]}>P33</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[33]?.state} ref={elRefs[35]}>P34</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[34]?.state} ref={elRefs[36]}>P35</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[35]?.state} ref={elRefs[37]}>P36</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[66]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[38]}>R3</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[36]?.state} ref={elRefs[39]}>P37</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[37]?.state} ref={elRefs[40]}>P38</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[38]?.state} ref={elRefs[41]}>P39</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[39]?.state} ref={elRefs[42]}>P40</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[40]?.state} ref={elRefs[43]}>P41</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[41]?.state} ref={elRefs[44]}>P42</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[42]?.state} ref={elRefs[45]}>P43</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[43]?.state} ref={elRefs[46]}>P44</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[44]?.state} ref={elRefs[47]}>P45</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[45]?.state} ref={elRefs[48]}>P46</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[46]?.state} ref={elRefs[49]}>P47</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[47]?.state} ref={elRefs[50]}>P48</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[48]?.state} ref={elRefs[51]}>P49</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[49]?.state} ref={elRefs[52]}>P50</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[50]?.state} ref={elRefs[53]}>P51</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[51]?.state} ref={elRefs[54]}>P52</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[52]?.state} ref={elRefs[55]}>P53</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[53]?.state} ref={elRefs[56]}>P54</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[54]?.state} ref={elRefs[57]}>P55</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[55]?.state} ref={elRefs[58]}>P56</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[56]?.state} ref={elRefs[59]}>P57</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[57]?.state} ref={elRefs[60]}>P58</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[58]?.state} ref={elRefs[61]}>P59</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[59]?.state} ref={elRefs[62]}>P60</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[60]?.state} ref={elRefs[63]}>P61</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[61]?.state} ref={elRefs[64]}>P62</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[62]?.state} ref={elRefs[65]}>P63</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[63]?.state} ref={elRefs[66]}>P64</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[67]?.state} ref={elRefs[67]}
                                                 style={{height: '90px', lineHeight: '80px'}}>
                                        R4
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const StyledPaper = styled(Paper)`
    background-color: ${props => props.state === "FREE" ? "darkgreen" :
    props.state === "DURING_RESERVATION" ? "#CCCC00" :
        props.state === "BUSY" ? "darkred" : 'black'};
    color: white;
}
`;

export default GroundFloor
import React, {createRef, useContext, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {UserContext} from "../utils/UserContext";
import {API_BASE_URL} from "../utils/constans";


const Floor3 = ({date}) => {

    const [places, setPlaces] = useState({});

    const arrLength = 74;
    const [elRefs, setElRefs] = React.useState([]);

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    const [userId, setUserId] = useState('');
    const [placePositionList, setPlacePositionList] = useState([]);


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
        await fetch(API_BASE_URL + '/places/intelligent-reservation', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    }

    useEffect(() => {
        fetchPlacesInDate(date);
    }, [places, date])

    const fetchPlacesInDate = async (date) => {
        return axios.get(API_BASE_URL + `/places/in/${date}`)
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
                                <Grid item xs={5}>
                                    <StyledPaper state={places[207]?.state} ref={elRefs[0]}>P301</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[208]?.state} ref={elRefs[1]}>P302</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[209]?.state} ref={elRefs[2]}>P303</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[210]?.state} ref={elRefs[3]}>P304</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[211]?.state} ref={elRefs[4]}>P305</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[212]?.state} ref={elRefs[5]}>P306</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[213]?.state} ref={elRefs[6]}>P307</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[214]?.state} ref={elRefs[7]}>P308</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[215]?.state} ref={elRefs[8]}>P309</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[216]?.state} ref={elRefs[9]}>P310</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[217]?.state} ref={elRefs[10]}>P311</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[218]?.state} ref={elRefs[11]}>P312</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[219]?.state} ref={elRefs[12]}>P313</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[220]?.state} ref={elRefs[13]}>P314</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[221]?.state} ref={elRefs[14]}>P315</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[222]?.state} ref={elRefs[15]}>P316</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[279]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[16]}>
                                        R301
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm" style={{paddingLeft: '80px'}}>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[223]?.state} ref={elRefs[17]}>P317</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[224]?.state} ref={elRefs[18]}>P318</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[225]?.state} ref={elRefs[19]}>P319</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[226]?.state} ref={elRefs[20]}>P320</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[227]?.state} ref={elRefs[21]}>P321</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[228]?.state} ref={elRefs[22]}>P322</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[229]?.state} ref={elRefs[23]}>P323</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[230]?.state} ref={elRefs[24]}>P324</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[231]?.state} ref={elRefs[25]}>P325</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[232]?.state} ref={elRefs[26]}>P326</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[233]?.state} ref={elRefs[27]}>P327</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[234]?.state} ref={elRefs[28]}>P328</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[235]?.state} ref={elRefs[29]}>P329</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[236]?.state} ref={elRefs[30]}>P330</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[237]?.state} ref={elRefs[31]}>P331</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[238]?.state} ref={elRefs[32]}>P332</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[239]?.state} ref={elRefs[33]}>P333</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[240]?.state} ref={elRefs[34]}>P334</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[241]?.state} ref={elRefs[35]}>P335</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[242]?.state} ref={elRefs[36]}>P336</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[280]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[37]}>
                                        R302
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[243]?.state} ref={elRefs[38]}>P337</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[244]?.state} ref={elRefs[39]}>P338</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[245]?.state} ref={elRefs[40]}>P339</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[246]?.state} ref={elRefs[41]}>P340</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[247]?.state} ref={elRefs[42]}>P341</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[248]?.state} ref={elRefs[43]}>P342</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[249]?.state} ref={elRefs[44]}>P343</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[250]?.state} ref={elRefs[45]}>P344</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[251]?.state} ref={elRefs[46]}>P345</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[252]?.state} ref={elRefs[47]}>P346</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[253]?.state} ref={elRefs[48]}>P347</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[254]?.state} ref={elRefs[49]}>P348</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[255]?.state} ref={elRefs[50]}>P349</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[256]?.state} ref={elRefs[51]}>P350</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[257]?.state} ref={elRefs[52]}>P351</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[258]?.state} ref={elRefs[53]}>P352</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm" style={{paddingLeft: '80px'}}>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[259]?.state} ref={elRefs[54]}>P353</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[260]?.state} ref={elRefs[55]}>P354</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[261]?.state} ref={elRefs[56]}>P355</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[262]?.state} ref={elRefs[57]}>P356</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[263]?.state} ref={elRefs[58]}>P357</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[264]?.state} ref={elRefs[59]}>P358</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[265]?.state} ref={elRefs[60]}>P359</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[266]?.state} ref={elRefs[61]}>P360</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[267]?.state} ref={elRefs[62]}>P361</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[268]?.state} ref={elRefs[63]}>P362</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[269]?.state} ref={elRefs[64]}>P363</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[270]?.state} ref={elRefs[65]}>P364</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[271]?.state} ref={elRefs[66]}>P365</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[272]?.state} ref={elRefs[67]}>P366</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[273]?.state} ref={elRefs[68]}>P367</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[274]?.state} ref={elRefs[69]}>P368</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[275]?.state} ref={elRefs[70]}>P369</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[276]?.state} ref={elRefs[71]}>P370</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[277]?.state} ref={elRefs[72]}>P371</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[278]?.state} ref={elRefs[73]}>P372</StyledPaper>
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

export default Floor3
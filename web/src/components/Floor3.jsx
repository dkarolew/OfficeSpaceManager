import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
// @ts-ignore
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";


const Floor3 = ({date}) => {

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
                            <Grid item xs={5}>
                                <StyledPaper state={places[207]?.state}>P301</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[208]?.state}>P302</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[209]?.state}>P303</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[210]?.state}>P304</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[211]?.state}>P305</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[212]?.state}>P306</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[213]?.state}>P307</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[214]?.state}>P308</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[215]?.state}>P309</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[216]?.state}>P310</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[217]?.state}>P311</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[218]?.state}>P312</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[219]?.state}>P313</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[220]?.state}>P314</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[221]?.state}>P315</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[222]?.state}>P316</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[279]?.state} style={{height: '90px', lineHeight: '80px'}}>
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
                                <StyledPaper state={places[223]?.state}>P317</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[224]?.state}>P318</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[225]?.state}>P319</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[226]?.state}>P320</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[227]?.state}>P321</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[228]?.state}>P322</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[229]?.state}>P323</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[230]?.state}>P324</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[231]?.state}>P325</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[232]?.state}>P326</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[233]?.state}>P327</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[234]?.state}>P328</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[235]?.state}>P329</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[236]?.state}>P330</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[237]?.state}>P331</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[238]?.state}>P332</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[239]?.state}>P333</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[240]?.state}>P334</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[241]?.state}>P335</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[242]?.state}>P336</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[280]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R302
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[243]?.state}>P337</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[244]?.state}>P338</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[245]?.state}>P339</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[246]?.state}>P340</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[247]?.state}>P341</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[248]?.state}>P342</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[249]?.state}>P343</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[250]?.state}>P344</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[251]?.state}>P345</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[252]?.state}>P346</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[253]?.state}>P347</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[254]?.state}>P348</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[255]?.state}>P349</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[256]?.state}>P350</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[257]?.state}>P351</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[258]?.state}>P352</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm" style={{paddingLeft: '80px'}}>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[259]?.state}>P353</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[260]?.state}>P354</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[261]?.state}>P355</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[262]?.state}>P356</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[263]?.state}>P357</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[264]?.state}>P358</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[265]?.state}>P359</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[266]?.state}>P360</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[267]?.state}>P361</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[268]?.state}>P362</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[269]?.state}>P363</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[270]?.state}>P364</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[271]?.state}>P365</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[272]?.state}>P366</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[273]?.state}>P367</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[274]?.state}>P368</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[275]?.state}>P369</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[276]?.state}>P370</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[277]?.state}>P371</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[278]?.state}>P372</StyledPaper>
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

export default Floor3
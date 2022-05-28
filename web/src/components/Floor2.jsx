import React, {createRef, useContext, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {UserContext} from "../utils/UserContext";
import {API_BASE_URL} from "../utils/constans";


const Floor2 = ({date}) => {

    const [places, setPlaces] = useState({});

    const arrLength = 68;
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
                                    <StyledPaper state={places[139]?.state} ref={elRefs[0]}>P201</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[140]?.state} ref={elRefs[1]}>P202</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[141]?.state} ref={elRefs[2]}>P203</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[142]?.state} ref={elRefs[3]}>P204</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[203]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[4]}>
                                        R201
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[143]?.state} ref={elRefs[5]}>P205</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[144]?.state} ref={elRefs[6]}>P206</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[145]?.state} ref={elRefs[7]}>P207</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[146]?.state} ref={elRefs[8]}>P208</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[147]?.state} ref={elRefs[9]}>P209</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[148]?.state} ref={elRefs[10]}>P210</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[149]?.state} ref={elRefs[11]}>P211</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[150]?.state} ref={elRefs[12]}>P212</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[151]?.state} ref={elRefs[13]}>P213</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[152]?.state} ref={elRefs[14]}>P214</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[153]?.state} ref={elRefs[15]}>P215</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[154]?.state} ref={elRefs[16]}>P216</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[155]?.state} ref={elRefs[17]}>P217</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[156]?.state} ref={elRefs[18]}>P218</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[157]?.state} ref={elRefs[19]}>P219</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[158]?.state} ref={elRefs[20]}>P220</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[159]?.state} ref={elRefs[21]}>P221</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[160]?.state} ref={elRefs[22]}>P222</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[161]?.state} ref={elRefs[23]}>P223</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[162]?.state} ref={elRefs[24]}>P224</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[163]?.state} ref={elRefs[25]}>P225</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[164]?.state} ref={elRefs[26]}>P226</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[165]?.state} ref={elRefs[27]}>P227</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[166]?.state} ref={elRefs[28]}>P228</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[204]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[29]}>
                                        R202
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[167]?.state} ref={elRefs[30]}>P229</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[168]?.state} ref={elRefs[31]}>P230</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[169]?.state} ref={elRefs[32]}>P231</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[170]?.state} ref={elRefs[33]}>P232</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[171]?.state} ref={elRefs[34]}>P233</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[172]?.state} ref={elRefs[35]}>P234</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[173]?.state} ref={elRefs[36]}>P235</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[174]?.state} ref={elRefs[37]}>P236</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[175]?.state} ref={elRefs[38]}>P237</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[176]?.state} ref={elRefs[39]}>P238</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[177]?.state} ref={elRefs[40]}>P239</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[178]?.state} ref={elRefs[41]}>P240</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[179]?.state} ref={elRefs[42]}>P241</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[180]?.state} ref={elRefs[43]}>P242</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[181]?.state} ref={elRefs[44]}>P243</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[182]?.state} ref={elRefs[45]}>P244</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[205]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[46]}>
                                        R203
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[183]?.state} ref={elRefs[47]}>P245</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[184]?.state} ref={elRefs[48]}>P246</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[185]?.state} ref={elRefs[49]}>P247</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[186]?.state} ref={elRefs[50]}>P248</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm" style={{paddingLeft: '80px'}}>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[187]?.state} ref={elRefs[51]}>P249</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[188]?.state} ref={elRefs[52]}>P250</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[189]?.state} ref={elRefs[53]}>P251</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[190]?.state} ref={elRefs[54]}>P252</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[206]?.state}
                                                 style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[55]}>
                                        R204
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[191]?.state} ref={elRefs[56]}>P253</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[192]?.state} ref={elRefs[57]}>P254</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[193]?.state} ref={elRefs[58]}>P255</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[194]?.state} ref={elRefs[59]}>P256</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[195]?.state} ref={elRefs[60]}>P257</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[196]?.state} ref={elRefs[61]}>258</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[197]?.state} ref={elRefs[62]}>P259</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[198]?.state} ref={elRefs[63]}>P260</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[199]?.state} ref={elRefs[64]}>P261</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[200]?.state} ref={elRefs[65]}>P262</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[201]?.state} ref={elRefs[66]}>P263</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[202]?.state} ref={elRefs[67]}>P264</StyledPaper>
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

export default Floor2
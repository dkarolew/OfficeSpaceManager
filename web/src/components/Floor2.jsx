import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
// @ts-ignore
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";


const Floor2 = ({date}) => {

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
                                <StyledPaper state={places[139]?.state}>P201</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[140]?.state}>P202</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[141]?.state}>P203</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[142]?.state}>P204</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[203]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R201
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[143]?.state}>P205</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[144]?.state}>P206</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[145]?.state}>P207</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[146]?.state}>P208</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[147]?.state}>P209</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[148]?.state}>P210</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[149]?.state}>P211</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[150]?.state}>P212</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[151]?.state}>P213</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[152]?.state}>P214</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[153]?.state}>P215</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[154]?.state}>P216</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[155]?.state}>P217</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[156]?.state}>P218</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[157]?.state}>P219</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[158]?.state}>P220</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[159]?.state}>P221</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[160]?.state}>P222</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[161]?.state}>P223</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[162]?.state}>P224</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[163]?.state}>P225</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[164]?.state}>P226</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[165]?.state}>P227</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[166]?.state}>P228</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[204]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R202
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[167]?.state}>P229</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[168]?.state}>P230</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[169]?.state}>P231</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[170]?.state}>P232</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[171]?.state}>P233</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[172]?.state}>P234</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[173]?.state}>P235</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[174]?.state}>P236</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[175]?.state}>P237</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[176]?.state}>P238</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[177]?.state}>P239</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[178]?.state}>P240</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[179]?.state}>P241</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[180]?.state}>P242</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[181]?.state}>P243</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[182]?.state}>P244</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[205]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R203
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[183]?.state}>P245</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[184]?.state}>P246</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[185]?.state}>P247</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[186]?.state}>P248</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm" style={{paddingLeft: '80px'}}>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[187]?.state}>P249</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[188]?.state}>P250</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[189]?.state}>P251</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[190]?.state}>P252</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[206]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R204
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[191]?.state}>P253</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[192]?.state}>P254</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[193]?.state}>P255</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[194]?.state}>P256</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[195]?.state}>P257</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[196]?.state}>258</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[197]?.state}>P259</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[198]?.state}>P260</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[199]?.state}>P261</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[200]?.state}>P262</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[201]?.state}>P263</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[202]?.state}>P264</StyledPaper>
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

export default Floor2
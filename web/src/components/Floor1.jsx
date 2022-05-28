import React, {createRef, useContext, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {UserContext} from "../utils/UserContext";
import {API_BASE_URL} from "../utils/constans";


const Floor1 = ({date}) => {

    const [places, setPlaces] = useState({});

    const arrLength = 71;
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
        fetchPlacesInDate(date);
    }, [places, date])

    const fetchPlacesInDate = async (date) => {
        return axios.get(API_BASE_URL + `/places/in/${date}`)
            .then(response => setPlaces(response.data));
    }

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
                                    <StyledPaper state={places[68]?.state} ref={elRefs[0]}>P101</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[69]?.state} ref={elRefs[1]}>P102</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[70]?.state} ref={elRefs[2]}>P103</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[71]?.state} ref={elRefs[3]}>P104</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[136]?.state} style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[4]}>
                                        R101
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[72]?.state} ref={elRefs[5]}>P105</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[73]?.state} ref={elRefs[6]}>P106</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[74]?.state} ref={elRefs[7]}>P107</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[75]?.state} ref={elRefs[8]}>P108</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[76]?.state} ref={elRefs[9]}>P109</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[77]?.state} ref={elRefs[10]}>P110</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[78]?.state} ref={elRefs[11]}>P111</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[79]?.state} ref={elRefs[12]}>P112</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[80]?.state} ref={elRefs[13]}>P113</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[81]?.state} ref={elRefs[14]}>P114</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[82]?.state} ref={elRefs[15]}>P115</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[83]?.state} ref={elRefs[16]}>P116</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm" style={{paddingLeft: '80px'}}>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[84]?.state} ref={elRefs[17]}>P117</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[85]?.state} ref={elRefs[18]}>P118</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[86]?.state} ref={elRefs[19]}>P119</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[87]?.state} ref={elRefs[20]}>P120</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[88]?.state} ref={elRefs[21]}>P121</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[89]?.state} ref={elRefs[22]}>P122</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[90]?.state} ref={elRefs[23]}>P123</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[91]?.state} ref={elRefs[24]}>P124</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[92]?.state} ref={elRefs[25]}>P125</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[93]?.state} ref={elRefs[26]}>P126</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[94]?.state} ref={elRefs[27]}>P127</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[95]?.state} ref={elRefs[28]}>P128</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[96]?.state} ref={elRefs[29]}>P29</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[97]?.state} ref={elRefs[30]}>P130</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[98]?.state} ref={elRefs[31]}>P131</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[99]?.state} ref={elRefs[32]}>P132</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[137]?.state} style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[33]}>
                                        R102
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[100]?.state} ref={elRefs[34]}>P133</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[101]?.state} ref={elRefs[35]}>P134</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[102]?.state} ref={elRefs[36]}>P135</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[103]?.state} ref={elRefs[37]}>P136</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[104]?.state} ref={elRefs[38]}>P137</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[105]?.state} ref={elRefs[39]}>P138</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[106]?.state} ref={elRefs[40]}>P139</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[107]?.state} ref={elRefs[41]}>P140</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[108]?.state} ref={elRefs[42]}>P141</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[109]?.state} ref={elRefs[43]}>P142</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[110]?.state} ref={elRefs[44]}>P143</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[111]?.state} ref={elRefs[45]}>P144</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[112]?.state} ref={elRefs[46]}>P145</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[113]?.state} ref={elRefs[47]}>P146</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[114]?.state} ref={elRefs[48]}>P147</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[115]?.state} ref={elRefs[49]}>P148</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[116]?.state} ref={elRefs[50]}>P149</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[117]?.state} ref={elRefs[51]}>P150</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[118]?.state} ref={elRefs[52]}>P151</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[119]?.state} ref={elRefs[53]}>P152</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={10} md={10}>
                                    <StyledPaper state={places[138]?.state} style={{height: '90px', lineHeight: '80px'}}
                                                 ref={elRefs[54]}>
                                        R103
                                    </StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[120]?.state} ref={elRefs[55]}>P153</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[121]?.state} ref={elRefs[56]}>P154</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[122]?.state} ref={elRefs[57]}>P155</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[123]?.state} ref={elRefs[58]}>P156</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[124]?.state} ref={elRefs[59]}>P157</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[125]?.state} ref={elRefs[60]}>P158</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[126]?.state} ref={elRefs[61]}>P159</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[127]?.state} ref={elRefs[62]}>P160</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '100px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[128]?.state} ref={elRefs[63]}>P161</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[129]?.state} ref={elRefs[64]}>P162</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[130]?.state} ref={elRefs[65]}>P163</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[131]?.state} ref={elRefs[66]}>P164</StyledPaper>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{paddingTop: '50px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[132]?.state} ref={elRefs[67]}>P165</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[133]?.state} ref={elRefs[68]}>P166</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[134]?.state} ref={elRefs[69]}>P167</StyledPaper>
                                </Grid>
                                <Grid item xs={5}>
                                    <StyledPaper state={places[135]?.state} ref={elRefs[70]}>P168</StyledPaper>
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

export default Floor1
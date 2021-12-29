import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
// @ts-ignore
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import axios from "axios";


const Floor1 = ({date}) => {

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
                                <StyledPaper state={places[68]?.state}>P101</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[69]?.state}>P102</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[70]?.state}>P103</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[71]?.state}>P104</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[136]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R101
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[72]?.state}>P105</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[73]?.state}>P106</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[74]?.state}>P107</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[75]?.state}>P108</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[76]?.state}>P109</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[77]?.state}>P110</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[78]?.state}>P111</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[79]?.state}>P112</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[80]?.state}>P113</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[81]?.state}>P114</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[82]?.state}>P115</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[83]?.state}>P116</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm" style={{paddingLeft: '80px'}}>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[84]?.state}>P117</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[85]?.state}>P118</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[86]?.state}>P119</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[87]?.state}>P120</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[88]?.state}>P121</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[89]?.state}>P122</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[90]?.state}>P123</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[91]?.state}>P124</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[92]?.state}>P125</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[93]?.state}>P126</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[94]?.state}>P127</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[95]?.state}>P128</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[96]?.state}>P29</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[97]?.state}>P130</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[98]?.state}>P131</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[99]?.state}>P132</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[137]?.state} style={{height: '90px', lineHeight: '80px'}}>
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
                                <StyledPaper state={places[100]?.state}>P133</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[101]?.state}>P134</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[102]?.state}>P135</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[103]?.state}>P136</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[104]?.state}>P137</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[105]?.state}>P138</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[106]?.state}>P139</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[107]?.state}>P140</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[108]?.state}>P141</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[109]?.state}>P142</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[110]?.state}>P143</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[111]?.state}>P144</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[112]?.state}>P145</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[113]?.state}>P146</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[114]?.state}>P147</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[115]?.state}>P148</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[116]?.state}>P149</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[117]?.state}>P150</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[118]?.state}>P151</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[119]?.state}>P152</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="col-sm">
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={10} md={10}>
                                <StyledPaper state={places[138]?.state} style={{height: '90px', lineHeight: '80px'}}>
                                    R103
                                </StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[120]?.state}>P153</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[121]?.state}>P154</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[122]?.state}>P155</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[123]?.state}>P156</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[124]?.state}>P157</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[125]?.state}>P158</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[126]?.state}>P159</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[127]?.state}>P160</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '100px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[128]?.state}>P161</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[129]?.state}>P162</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[130]?.state}>P163</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper  state={places[131]?.state}>P164</StyledPaper>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{paddingTop: '50px'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={5}>
                                <StyledPaper state={places[132]?.state}>P165</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[133]?.state}>P166</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[134]?.state}>P167</StyledPaper>
                            </Grid>
                            <Grid item xs={5}>
                                <StyledPaper state={places[135]?.state}>P168</StyledPaper>
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

export default Floor1
import React, {useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSectors} from '../store/sectorsSlice';
import {AppState} from '../utils/rootReducer';

const SectorList = () => {
    const dispatch = useDispatch();

    const getSectors = useCallback(bindActionCreators(fetchSectors, dispatch), []);

    const {sectors} = useSelector((state: AppState) => state.sectors);

    useEffect(() => {
        getSectors();
    }, [getSectors])

    return (
        <div style={{margin : '30px'}}>
            {sectors.map((sector, index) => {
                return <p key={index}>{'Sector id: ' + sector['id'] + ' Code: ' + sector['code']}</p>
            })}
        </div>
    );
};

export default SectorList;
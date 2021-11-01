import React from 'react';


const TwoPanelContainer = ({leftPanel, rightPanel}) => {

    return (
        <div className='split-screen'>
            <div className='left-panel'>
                {leftPanel}
            </div>
            <div className='right-panel'>
                {rightPanel}
            </div>
        </div>
    )
}

export default TwoPanelContainer


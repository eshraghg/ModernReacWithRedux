import React from 'react';

const getSeason = (lat, currentMonth) => {
    if (currentMonth>2 && currentMonth<9) {
        return lat > 0 ? 'Summer' : 'Winter' ;
    } else {
        return lat > 0 ? 'Summer' : 'Winter' ;
    }
};

const SeasonDisplay = (props) => {
    const currentSeason = getSeason(props.lat, new Date().getMonth() );
    return <div> {currentSeason} </div>
}; 

export default SeasonDisplay;


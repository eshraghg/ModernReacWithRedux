import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    Summer : {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    Winter : {
        text: "It's chilly out there!",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, currentMonth) => {
    if (currentMonth>2 && currentMonth<9) {
        return lat > 0 ? 'Summer' : 'Winter' ;
    } else {
        return lat > 0 ? 'Summer' : 'Winter' ;
    }
};

const SeasonDisplay = (props) => {
    const currentSeason = getSeason(props.lat, new Date().getMonth() );
    const {text , iconName} = seasonConfig[currentSeason];

    return (
        <div className={`seasonDisplay`}> 
            <i className={`massive icon-right ${iconName} icon`} />
            <h1> {text} </h1>
            <i className={`massive icon-left ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;


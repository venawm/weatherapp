import React from 'react';

const Weathercard = () => {
    return (
        <div>
            <h1>City Name</h1>
            <img src="" alt="" />
            <img src="" alt="" />
            <h2>Temperature</h2>
            <div className="max-min">
                <h3>Max Temp</h3>
                <h3>Min Temp</h3>
            </div>
            <h3>Weather Condition</h3>
        </div>
    );
};

export default Weathercard;
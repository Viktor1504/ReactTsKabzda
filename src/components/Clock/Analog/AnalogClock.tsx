import React from 'react';
import './AnalogClock.css';
import {ClockType} from '../Electro/ElectronClock';

const AnalogClock: React.FC<ClockType> = ({time: {hours, minutes, seconds}}) => {

    const deg = 6;
    const hourStyle = {transform: `rotateZ(${hours * 30 + minutes / 12 * deg}deg)`}
    const minuteStyle = {transform: `rotateZ(${minutes * deg}deg)`}
    const secondStyle = {transform: `rotateZ(${seconds * deg}deg)`}

    return (
        <div className="clock">
            <div className="hour">
                <div className="hr" style={hourStyle}></div>
            </div>
            <div className="min">
                <div className="mn" style={minuteStyle}></div>
            </div>
            <div className="sec">
                <div className="sc" style={secondStyle}></div>
            </div>
        </div>
    );
};

export default AnalogClock;

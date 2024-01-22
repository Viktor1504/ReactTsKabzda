import React from 'react';
import './ElectronClock.css';

type TimeType = {
    hours: number
    minutes: number
    seconds: number
}

export type ClockType = {
    time: TimeType
}

const ElectronClock: React.FC<ClockType> = ({time: {hours, minutes, seconds}}) => {
    const getTwoDigitsString = (num: number) => (num < 10 ? `0${num}` : num).toString();

    return (
        <div className="clock-container">
            <span className="clock-digit">{getTwoDigitsString(hours)}</span>
            :
            <span className="clock-digit">{getTwoDigitsString(minutes)}</span>
            :
            <span className="clock-digit">{getTwoDigitsString(seconds)}</span>
        </div>
    )
}

export default ElectronClock;

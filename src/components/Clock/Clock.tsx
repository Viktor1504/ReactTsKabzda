import React, {useEffect, useState} from 'react';
import ElectronClock from './Electro/ElectronClock';
import AnalogClock from './Analog/AnalogClock';
import './Clock.css'

const Clock: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick')
            const now = new Date();
            setTime({
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds(),
            });
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const onclickHandler = () => setShow(!show);

    return <div>
        <button onClick={onclickHandler}>Show clock</button>

        <div className="clock-container">
            {show ? (
                <ElectronClock time={time}/>
            ) : (
                <div className="analog-clock-container">
                    <AnalogClock time={time}/>
                </div>
            )}
        </div>
    </div>
}

export default Clock;

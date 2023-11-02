import {useState} from 'react';

type PropsType = {
    on: boolean
    setOn: (value: boolean) => void
}

function ControlOnOff(props: PropsType) {
    console.log(`on: ${props.on}`)


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'

    }

    const clicked = () => {
        props.setOn(!props.on)
    }

    return <div>
        <div style={onStyle} onClick={clicked}>On</div>
        <div style={offStyle} onClick={clicked}>Off</div>
        <div style={indicatorStyle}></div>

    </div>
}

export default ControlOnOff;
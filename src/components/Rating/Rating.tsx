import React from 'react';
import {spawn} from 'child_process';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

export function Rating(props: RatingPropsType) {
    console.log('Render Rating')

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    console.log('Render star')

    return (
        <span onClick={() => props.onClick(props.value)}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )


}
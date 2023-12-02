import {SelectDim} from './SelectDim';
import {useState} from 'react';

export default {
    component: SelectDim,
};

const namesFriends = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'}
]

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return (
        <>
            <SelectDim
                onChange={setValue}
                value={value}
                items={namesFriends}/>
        </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <SelectDim
                onChange={setValue}
                value={value}
                items={namesFriends}/>
        </>
    )
}
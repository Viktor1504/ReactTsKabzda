import {SelectDim} from './SelectDim';
import {useState} from 'react';

export default {
    component: SelectDim,
};

const namesFriends = [
    {id: '1', title: 'Minsk', population: 2000000},
    {id: '2', title: 'Moscow', population: 25000000},
    {id: '3', title: 'Kiev', population: 3000000}
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
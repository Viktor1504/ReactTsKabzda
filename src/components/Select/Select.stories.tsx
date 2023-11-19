import {Select} from './Select';
import {useState} from 'react';

export default {
    component: Select,
};

const namesFriends = [
    {title: 'Victor', value: '1'},
    {title: 'Pavel', value: '2'},
    {title: 'Elena', value: '3'},
    {title: 'Vitaliy', value: '4'}
]

export const ControlledSelect = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [title, setTitle] = useState('Select element')

    return (
        <Select
            value={title}
            items={namesFriends}
            collapsed={collapsed}
            setSelectCollapsed={setCollapsed}
            setTitle={setTitle}
        />
    )
}
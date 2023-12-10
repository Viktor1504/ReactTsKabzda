import {ItemType, SelectDim} from './SelectDim';
import {useMemo, useState} from 'react';
import s from './SelectDim.module.css'

export default {
    title: 'React.memo and UseMemo'
}

export const Example1 = () => {
    const [value, setValue] = useState('1')

    const [counter, setCounter] = useState(0)


    const [names, setNames] = useState<ItemType[]>([
        {id: '1', title: 'Minsk', population: 2000000},
        {id: '2', title: 'Moscow', population: 25000000},
        {id: '3', title: 'Kiev', population: 3000000}
    ])

    const filteredCities = useMemo(() => {
        console.log('Filter City')
        return names.filter(n => n.title.toLowerCase().startsWith('m'))
    }, [names]);

    const filteredPopulation = useMemo(() => {
        console.log('Filter Population')
        return names.filter(n => n.population < 3000000)
    }, [names])

    return <div className={s.container}>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <span>{counter}</span>
        <div>
            <SelectDim onChange={setValue} value={value} items={names}/>
        </div>

        <div>
            <SelectDim onChange={setValue} value={value} items={filteredCities}/>
        </div>

        <div>
            <SelectDim onChange={setValue} value={value} items={filteredPopulation}/>
        </div>
    </div>
}
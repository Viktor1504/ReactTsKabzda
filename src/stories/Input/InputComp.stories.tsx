import {InputComp} from './InputComp';
import {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    component: InputComp,
};

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input value={value} onChange={onChangeValue}/> --- {value}
        </>
    )
}
export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>save</button>
            - actual value: {value}
        </>
    )
}
export const ControlledInputWithFixedValue = () => <input value={'IT-INCUBATOR'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeInputHandler}/>
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeInputHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeSelectHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}





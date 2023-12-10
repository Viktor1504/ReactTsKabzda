import React, {KeyboardEvent, memo, useEffect, useState} from 'react';
import s from './SelectDim.module.css'

export type ItemType = {
    id: string
    title: string
    population: number
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectDim = memo(function SelectDim(props: SelectPropsType) {
    console.log('Render!')
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.id === props.value)
    const hoveredItem = props.items.find(i => i.id === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items [i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.id)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].id)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyDown={onKeyDownHandler} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            key={i.id}
                            onMouseEnter={() => setHoveredElementValue(i.id)}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            onClick={() => onItemClick(i.id)}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
})
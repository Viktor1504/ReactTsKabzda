import React from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    items: ItemType[]
    value: string
    collapsed: boolean
    setSelectCollapsed: (collapsed: boolean) => void
    setTitle: (title: string) => void
}

type SelectTitlePropsType = {
    value: string
    collapsed: boolean
    setSelectCollapsed: (collapsed: boolean) => void
}

type SelectBodyPropsType = {
    items: ItemType[]
    collapsed: boolean
    setSelectCollapsed: (collapsed: boolean) => void
    setTitle: (title: string) => void
}

export const Select = (props: SelectPropsType) => {

    return (
        <div className={s.selectWrapper}>
            <SelectTitle setSelectCollapsed={props.setSelectCollapsed}
                         collapsed={props.collapsed}
                         value={props.value}/>
            {props.collapsed && <SelectBody collapsed={props.collapsed}
                                            setSelectCollapsed={props.setSelectCollapsed}
                                            setTitle={props.setTitle}
                                            items={props.items}/>}
        </div>
    )
}

const SelectTitle = (props: SelectTitlePropsType) => {

    const onClickTitleHandler = () => props.setSelectCollapsed(!props.collapsed)

    return (
        <div className={s.title} onClick={onClickTitleHandler}>{props.value}</div>
    )
}

const SelectBody = (props: SelectBodyPropsType) => {

    const onClickItemHandler = (title: string) => {
        props.setTitle(title)
        props.setSelectCollapsed(!props.collapsed)
    }

    return (
        <>
            {
                props.items.map(i => {
                    return (
                        <div
                            className={s.item}
                            key={i.value}
                            onClick={() => {
                                onClickItemHandler(i.title)
                            }}>
                            {i.title}
                        </div>
                    )
                })
            }
        </>
    )
}

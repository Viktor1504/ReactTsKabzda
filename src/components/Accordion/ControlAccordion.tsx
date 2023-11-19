import React from 'react';

type ItemType = {
    title: string
    value: any
}


type AccordionPropsTitle = {
    setAccordionCollapsed: (collapsed: boolean) => void
    titleValue: string
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitleType = {
    setAccordionCollapsed: (collapsed: boolean) => void
    title: string
    collapsed: boolean
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
 }

export function ControlAccordion(props: AccordionPropsTitle) {

    return (
        <>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => props.setAccordionCollapsed(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i, index) => {
                return <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>
            })}
        </ul>
    )
}


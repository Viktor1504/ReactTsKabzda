import React from 'react';

type AccordionPropsTitle = {
    setAccordionCollapsed: (collapsed: boolean) => void
    titleValue: string
    collapsed: boolean
    countStrings: number
}

type AccordionTitleType = {
    setAccordionCollapsed: (collapsed: boolean) => void
    title: string
    collapsed: boolean
}

type AccordionBodyType = {
    listString: number
}

export function ControlAccordion(props: AccordionPropsTitle) {
    return (
        <>
            <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody listString={props.countStrings}/>}
        </>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => props.setAccordionCollapsed(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody(props: AccordionBodyType) {
    const numberArray = []
    for (let i = 0; i <= props.listString; i++) {
        numberArray.push(i)
    }
    return (
        <ul>
            {numberArray.map(e => {
                return <li key={e}>{e}</li>
            })}
        </ul>
    )
}


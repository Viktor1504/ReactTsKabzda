import React, {useState} from 'react';

type AccordionPropsTitle = {
    titleValue: string
    countStrings: number
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

type AccordionBodyType = {
    listString: number
}

export function UncontrolledAccordion(props: AccordionPropsTitle) {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody listString={props.countStrings}/>}
        </>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
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


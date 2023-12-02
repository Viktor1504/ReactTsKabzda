import React, {useReducer} from 'react';
import {reducer} from './reducer';

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

    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}

            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
            {!state.collapsed && <AccordionBody listString={props.countStrings}/>}
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


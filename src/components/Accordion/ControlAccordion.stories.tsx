import {ControlAccordion} from './ControlAccordion';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    component: ControlAccordion,
};

const onClickCallBack = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <ControlAccordion titleValue={'Collapsed accordion'}
                             collapsed={true}
                             setAccordionCollapsed={() => action('onChange')}
                             items={[{title: 'Victor', value: 1}, {title: 'Pavel', value: 2}, {title: 'Elena', value: 3}, {title: 'Vitaliy', value: 4}]}
                             onClick={onClickCallBack}
    />
}

export const OpenedAccordion = () => {
    return <ControlAccordion titleValue={'Opened accordion'}
                             collapsed={false}
                             setAccordionCollapsed={() => {
                             }}
                             items={[{title: 'Victor', value: 1}, {title: 'Pavel', value: 2}, {title: 'Elena', value: 3}, {title: 'Vitaliy', value: 4}]}
                             onClick={onClickCallBack}
    />
}

export const Accordion = () => {

    const [collapsed, setCollapsed] = useState(false)

    return <ControlAccordion titleValue={'Opened accordion'}
                             collapsed={collapsed}
                             setAccordionCollapsed={() => setCollapsed(!collapsed)}
                             items={[{title: 'Victor', value: 1}, {title: 'Pavel', value: 2}, {title: 'Elena', value: 3}, {title: 'Vitaliy', value: 4}]}
                             onClick={onClickCallBack}
    />
}
import React, {useState} from 'react';
import './App.css';
import {ControlAccordion} from './components/Accordion/ControlAccordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import ControlOnOff from './components/OnOff/ControlOnOff';
import {action} from '@storybook/addon-actions';
import {Select} from './components/Select/Select';
import {SelectDim} from './components/SelectDim/SelectDim';

function App() {

    // console.log('app rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState<boolean>(false);


    const namesFriends = [
        {title: 'Victor', value: '1'},
        {title: 'Pavel', value: '2'},
        {title: 'Elena', value: '3'},
        {title: 'Vitaliy', value: '4'}
    ]

    return (  // возвращает JSX
        <div className={'App'}>
            {/*<Select items={namesFriends}/>*/}
            {/*<ControlAccordion titleValue={'Menu'}*/}
            {/*                  collapsed={accordionCollapsed}*/}
            {/*                  setAccordionCollapsed={setAccordionCollapsed}*/}
            {/*                  items={[{title: 'Victor', value: 1}, {title: 'Pavel', value: 2}, {*/}
            {/*                      title: 'Elena',*/}
            {/*                      value: 3*/}
            {/*                  }, {title: 'Vitaliy', value: 4}]}*/}
            {/*                  onClick={() => {*/}
            {/*                  }}*/}
            {/*/>*/}

            {/*<ControlOnOff on={on} setOn={setOn}/> {on.toString()}*/}
            {/*<UncontrolledAccordion titleValue={'Menu'} countStrings={10}/>*/}
            {/*<UncontrolledRating/>*/}

            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My step'}/>*/}

            {/*<Accordion titleValue={'Users'} collapsed={false} countStrings={5}/>*/}
            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <ControlOnOff on={on} setOn={setOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;

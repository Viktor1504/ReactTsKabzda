import React, {useState} from 'react';
import './App.css';
import {ControlAccordion} from './components/Accordion/ControlAccordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import ControlOnOff from './components/OnOff/ControlOnOff';

function App() {

    // console.log('app rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState<boolean>(false);

    return (  // возвращает JSX
        <div className={'App'}>
            {/*<ControlAccordion titleValue={'Menu'}*/}
            {/*                  collapsed={accordionCollapsed}*/}
            {/*                  setAccordionCollapsed={setAccordionCollapsed}*/}
            {/*                  countStrings={10}*/}
            {/*/>*/}

            <ControlOnOff on={on} setOn={setOn}/> {on.toString()}
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

            {/*<OnOff/>*/}
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

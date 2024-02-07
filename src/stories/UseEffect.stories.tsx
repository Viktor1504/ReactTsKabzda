import {useEffect, useState} from 'react';
import {log} from 'node:util';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetTimeoutExample = () => {

    const [hours, setHours] = useState(23)
    const [minutes, setMinutes] = useState(59)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 59) {
                    setMinutes(prevMinutes => {
                        if (prevMinutes === 59) {
                            setHours(prevHours => {
                                if (prevHours === 23) {
                                    return 0
                                }
                                return prevHours + 1
                            })
                            return 0
                        }
                        return prevMinutes + 1
                    })
                    return 0
                }
                return prevSeconds + 1
            })
        }, 100)
    }, [])

    console.log('hi')

    return (
        <div>
            <h1>{hours}:{minutes}:{seconds}</h1>
        </div>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('component rendered', counter)

    useEffect(() => {
        console.log('Effect occurred', counter)


        return () => {
            console.log('Reset Effect', counter)
        }
    }, [])

    const increase = () => setCounter(counter + 1)

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerEffectExample = () => {
    const [text, setText] = useState('')

    console.log('component rendered', text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(prevText => prevText + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [])


    return <>
        Typed text: {text}
    </>
}
import React, {memo, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    const resultA = useMemo(() => {
        let tempResult = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult *= i
        }
        return tempResult
    }, [a]);

    let resultB = 1

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const Messages = memo(function Messages(props: { count: number }) {
    console.log('NewMessage!')
    return <div>{props.count}</div>
})

const Users = memo(function Users(props: { users: string[] }) {
    console.log('Users!')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Victor', 'Pavel', 'Dima', 'Petya'])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('e'))
    }, [users])

    const addUser = () => setUsers([...users, 'Svetlana'])
    const addCounter = () => setCounter(counter + 1)

    return <>
        <button onClick={addCounter}>+</button>
        <button onClick={addUser}>ADD USER</button>
        <Messages count={counter}/>
        <Users users={newArr}/>
    </>
}
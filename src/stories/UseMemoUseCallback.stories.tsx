import React, {memo, useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultB = 1

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    const resultA = useMemo(() => {
        let tempResult = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult *= i
        }
        return tempResult
    }, [a]);


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

type BooksType = {
    addBook: () => void
}

const Books = memo(function Users(props: BooksType) {
    console.log('Books!')
    return <div>
        <button onClick={props.addBook}>ADD BOOK</button>
    </div>
})

export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const addCounter = () => setCounter(counter + 1)

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, 'Angular'])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        setBooks([...books, 'Angular'])
    }, [books])

    return <>
        <button onClick={addCounter}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}


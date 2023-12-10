import React, {memo, useState} from 'react';

export default {
    title: 'React.memo demo'
}

const Messages = memo(function Messages(props: { count: number }) {
    console.log('NewMessage!')
    return <div>{props.count}</div>
})

const Users = memo(function Users(props: { users: string[] }) {
    console.log('USERS!')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Victor', 'Pavel', 'Dima', 'Petya'])

    const addCounter = () => setCounter(counter + 1)
    const addUser = () => setUsers([...users, 'Svetlana'])

    return <>
        <button onClick={addCounter}>+</button>
        <button onClick={addUser}>add user</button>
        <Messages count={counter}/>
        <Users users={users}/>
    </>
}
import React from 'react'
import TodoItem from './TodoItem'

export default function Todos({ todos = [] }) {
    return todos?.map((todo) => (
        <div>
            <TodoItem key={todo?.id} todo={todo} />
        </div>
    ))
}
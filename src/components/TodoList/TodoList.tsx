import React from "react";

export interface TodoListType {
    todos: TodoType[];
}

export interface TodoType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodoList = ({ todos }: TodoListType) => (
    <div>
        {todos.map((todo) => (
            <div key={todo.id}>{todo.title}</div>
        ))}
    </div>
);

export default TodoList;

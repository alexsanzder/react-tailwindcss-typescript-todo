import * as React from "react";
import TodoItem, { TodoItemType } from "../TodoItem/TodoItem";
export interface TodoListType {
    todos: TodoItemType[];
}

const TodoList = ({ todos }: TodoListType) => (
    <div className="h-50 last:border-b-0 bg-white rounded-lg shadow-md">
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
);

export default TodoList;

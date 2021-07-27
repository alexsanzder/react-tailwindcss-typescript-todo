import * as React from "react";
import TodoItem, { TodoType } from "../TodoItem/TodoItem";
export interface TodoListType {
    todoes: TodoType[];
}

const TodoList = ({ todoes }: TodoListType) => {
    const [todos, setTodos] = React.useState(todoes);
    const toggleTodo = (selectedTodo: TodoType) => {
        const newTodos = todos?.map((todo: TodoType) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <li className="h-50 last:border-b-0 bg-white rounded-lg shadow-md">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </li>
    );
};

export default TodoList;

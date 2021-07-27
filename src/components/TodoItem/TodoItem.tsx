import classNames from "classnames";
import * as React from "react";

export interface TodoType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoItemType {
    todo: TodoType;
    toggleTodo: (selectedTodo: TodoType) => void;
}
const TodoItem: React.FC<TodoItemType> = ({ todo, toggleTodo }) => {
    return (
        <div className="flex items-center justify-start w-full h-16 px-5 border-b">
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox focus:ring-2 focus:ring-purple-400 checked:bg-purple-600 focus:border-white focus:border-1 w-5 h-5 border-2 border-gray-300 border-opacity-75 rounded-full"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo)}
                />
                <span
                    className={classNames("ml-5", {
                        "line-through": todo.completed,
                    })}
                >
                    {todo.title}
                </span>
            </label>
            {/* <div className="bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mr-5 text-white rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
            </svg>
        </div> */}
        </div>
    );
};

export default TodoItem;

import * as React from "react";

export interface TodoItemType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface Todo {
    todo: TodoItemType;
}
const TodoItem = (todo: Todo) => (
    <div className="flex items-center justify-start w-full h-16 px-5 border-b">
        <div className="bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center w-5 h-5 mr-5 text-white rounded-full">
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
        </div>
        {todo.todo.title}
    </div>
);
export default TodoItem;

import * as React from "react";
import { useQuery } from "urql";
import TodoInput from "./components/TodoInput/TodoInput";
import { TodoType } from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";

const TodosQuery = `
query TodosQuery {
  todos(options: {slice: {limit: 10}}) {
    data {
      id
      title
      completed
    }
  }
}
`;

interface TodoResponse {
    todos: {
        data: TodoType[];
    };
}

function App() {
    const [result] = useQuery<TodoResponse>({
        query: TodosQuery,
    });
    const { data, fetching, error } = result;

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <div className="h-full text-gray-700">
            <div className="bg-hero opacity-80 h-60">
                <div className="filter mix-blend-color h-full bg-purple-600"></div>
            </div>
            <div className="container relative max-w-lg mx-auto">
                <div className="-top-48 absolute">
                    <div className="flex items-center justify-between w-full h-10">
                        <h1 className="bottom-5 left-5 filtet drop-shadow-2xl z-30 text-4xl font-bold text-white uppercase">
                            todo list
                        </h1>
                        <button className="bottom-5 right-5 filter drop-shadow-2xl w-10 h-10 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </button>
                    </div>
                    <TodoInput />
                    <ul>
                        <TodoList todoes={data?.todos?.data ?? []} />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import { useQuery } from "urql";
import TodoList, { TodoType } from "./components/TodoList/TodoList";

const TodosQuery = `
query TodosQuery {
  todos(options: {slice: {limit: 10}})) {
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
        <div className="h-full">
            <h1 className="text-4xl font-bold">My todo list</h1>
            {<TodoList todos={data?.todos?.data ?? []}></TodoList>}
        </div>
    );
}

export default App;

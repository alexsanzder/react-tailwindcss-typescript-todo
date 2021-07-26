import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";
import mockData from "../../mocks/mockData";

describe("todo item test", () => {
    it("should show a todo", () => {
        render(<TodoItem todo={mockData[0]} />);
        expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
    });
});

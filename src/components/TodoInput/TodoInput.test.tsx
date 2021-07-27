import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";
import mockData from "../../mocks/mockData";

describe("todo item test", () => {
    it("should show a todo", () => {
        render(<TodoInput />);
        expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
    });
});

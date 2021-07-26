import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";

describe("<App /> tests", () => {
    it("renders <App />", () => {
        render(<App />);
    });

    it("renders todo title", async () => {
        const { getByText, debug } = render(<App />);
        const titleElement = await waitFor(() => getByText(/todo list/i));
        expect(titleElement).toBeInTheDocument();

        // debug();
    });
});

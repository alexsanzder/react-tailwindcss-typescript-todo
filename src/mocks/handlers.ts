import { graphql } from "msw";
import mockData from "./mockData";

export const handlers = [
    graphql.query("TodosQuery", (req, res, ctx) => {
        return res(
            ctx.data({
                todos: {
                    data: mockData,
                },
            })
        );
    }),
];

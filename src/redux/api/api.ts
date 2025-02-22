import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (buider) => ({
        getTodos: buider.query({
            query: () => ({
                url: "/users",
                method: "GET",
            })
        })
    })
})

export const { useGetTodosQuery } = baseApi
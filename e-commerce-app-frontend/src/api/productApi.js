import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyJsonApi = createApi({
  reducerPath: "dummyJsonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery} = dummyJsonApi;

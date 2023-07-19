import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/product",
    }),
    singleProduct: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetProductQuery, useSingleProductQuery } = productApi;

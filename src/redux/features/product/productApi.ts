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
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/comment/${id}`,
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),
    getComment: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/comment/${id}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productApi;

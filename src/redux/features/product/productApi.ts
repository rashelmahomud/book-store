/* eslint-disable @typescript-eslint/restrict-template-expressions */
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
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/product`,
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  usePostBookMutation,
  useDeleteBookMutation,
} = productApi;

import { apiSlice } from "../api/apiSlice";

export const feedbacksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeedbacks: builder.query({
      query: () => "/api/feedback/",
      providesTags: ["Feedbacks"],
    }),
    deleteBlog: builder.mutation({
      query: () => ({
        url: `/api/feedback/delete${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Feedbacks"],
    }),
  }),
});

export const { useDeleteBlogMutation, useGetAllFeedbacksQuery } = feedbacksApi;

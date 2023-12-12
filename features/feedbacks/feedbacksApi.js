import { apiSlice } from "../api/apiSlice";

export const feedbacksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeedbacks: builder.query({
      query: () => "/api/feedback/",
      providesTags: ["Feedbacks"],
    }),
    deleteFeedback: builder.mutation({
      query: (id) => ({
        url: `/api/feedback/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Feedbacks"],
    }),
  }),
});

export const { useDeleteFeedbackMutation, useGetAllFeedbacksQuery } =
  feedbacksApi;

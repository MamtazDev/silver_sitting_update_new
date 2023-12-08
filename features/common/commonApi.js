import { apiSlice } from "../api/apiSlice";

export const commonApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFeedback: builder.mutation({
      query: (data) => ({
        url: "/api/feedback/add",
        method: "POST",
        body: data,
      }),
    }),
    makeContact: builder.mutation({
      query: (data) => ({
        url: "/api/makeContact/add",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddFeedbackMutation, useMakeContactMutation } = commonApi;

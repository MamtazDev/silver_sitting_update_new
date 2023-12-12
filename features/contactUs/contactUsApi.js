import { apiSlice } from "../api/apiSlice";

export const contactUsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContactUs: builder.query({
      query: () => "/api/makeContact/",
      providesTags: ["ContactUs"],
    }),
    deleteContactUs: builder.mutation({
      query: (id) => ({
        url: `/api/makeContact/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ContactUs"],
    }),
  }),
});

export const { useDeleteContactUsMutation, useGetAllContactUsQuery } =
  contactUsApi;

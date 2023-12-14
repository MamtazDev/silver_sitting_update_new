import { apiSlice } from "../api/apiSlice";

export const pdfApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPdf: builder.query({
      query: () => "/pdf",
    }),
    updatePdfStatus: builder.mutation({
      query: (data) => ({
        url: "/api/pdf/pdfStatus",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllPdfQuery, useUpdatePdfStatusMutation } = pdfApi;

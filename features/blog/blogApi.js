import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/api/blogs",
        method: "POST",
        body: data,
      }),
    }),
    getAllBlogs: builder.query({
      query: () => "/api/blogs/all",
      providesTags: ["Blogs"],
    }),
    getBlogById: builder.query({
      query: (blogID) => `/api/blogs/${blogID}`,
    }),
    updateBlog: builder.mutation({
      query: ({ blogID, data }) => ({
        url: `/api/blogs/${blogID}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (blogID) => ({
        url: `/api/blogs/${blogID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;

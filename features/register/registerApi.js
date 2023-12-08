import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./registerSlice";
import Cookies from "js-cookie";

export const registerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/users",
    }),

    register: builder.mutation({
      query: (data) => ({
        url: "/api/users/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/users/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          Cookies.set(
            "silverSitting",
            JSON.stringify({
              accessToken: result.data.accessTOken,
              user: {
                _id: result.data.user._id,
                role: result.data.user.role,
                firstName: result.data.user.firstName,
                lastName: result.data.user.lastName,
                email: result.data.user.email,
                isVerified: result.data.user.isVerified,
                residance: result.data.user.residance,
              },
            })
          );

          localStorage.setItem(
            "silverSittingAuth",
            JSON.stringify({
              accessToken: result.data.accessTOken,
              user: {
                _id: result.data.user._id,
                role: result.data.user.role,
                firstName: result.data.user.firstName,
                lastName: result.data.user.lastName,
                email: result.data.user.email,
                isVerified: result.data.user.isVerified,
                residance: result.data.user.residance,
              },
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessTOken,
              user: {
                _id: result.data.user._id,
                role: result.data.user.role,
                firstName: result.data.user.firstName,
                lastName: result.data.user.lastName,
                email: result.data.user.email,
                isVerified: result.data.user.isVerified,
                residance: result.data.user.residance,
              },
            })
          );
        } catch (error) {}
      },
    }),
    getSingleUser: builder.query({
      query: (id) => `/api/users/${id}`,
      providesTags: ["User"],
    }),
    editUser: builder.mutation({
      query: ({ id, editData }) => ({
        url: `/api/users/edit/${id}`,
        method: "PUT",
        body: editData,
      }),
      invalidatesTags: ["User"],
    }),
    uploadDocument: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/users/upload/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetSingleUserQuery,
  useEditUserMutation,
  useUploadDocumentMutation,
} = registerApi;

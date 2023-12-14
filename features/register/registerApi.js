import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./registerSlice";
import Cookies from "js-cookie";

export const registerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/users",
      providesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
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
        // url: `/api/users/upload/${id}`,
        url: `/upload`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
      }),
    }),
    sendResendEmail: builder.mutation({
      query: (data) => ({
        url: `/api/users/resendEmail`,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `/api/users/changePassword`,
        method: "PUT",
        body: data,
      }),
    }),
    changeSearchStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/users/searchStatus/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    changeVolunteerStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/users/volunteerStatus/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/api/users/resetPasswordEmail",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/api/users/forgotPassword",
        method: "POST",
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
  useSendResendEmailMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  useChangeSearchStatusMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useChangeVolunteerStatusMutation,
} = registerApi;

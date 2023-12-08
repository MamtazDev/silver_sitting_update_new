import { apiSlice } from "../api/apiSlice";

export const chatAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversationTwoUsers: builder.query({
      query: ({ firstUserId, secondUserId }) =>
        `/api/conversation/users/${firstUserId}/${secondUserId}`,
    }),
    getConversationByUser: builder.query({
      query: (userId) => `/api/conversation/${userId}`,
    }),
    addConversation: builder.mutation({
      query: (data) => ({
        url: "/api/conversation/add",
        method: "POST",
        body: data,
      }),
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: "/api/message/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Messages"],
    }),
    getMessageByConversation: builder.query({
      query: (conversationId) => `/api/message/${conversationId}`,
      providesTags: ["Messages"],
    }),
    putMessageSeen: builder.mutation({
      query: ({ senderId, conversationId }) => ({
        url: `/api/message/seen/${senderId}/${conversationId}`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useGetConversationTwoUsersQuery,
  useGetConversationByUserQuery,
  useAddConversationMutation,
  useAddMessageMutation,
  useGetMessageByConversationQuery,
  usePutMessageSeenMutation,
} = chatAPi;

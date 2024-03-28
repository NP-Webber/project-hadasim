import apiSlice from "../../app/apiSlice";

const membersApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllMembers: build.query({
            query: () => ({
                url: "api/members"
            }),
            providesTags: ["Members"]
        }),
        addMember: build.mutation({
            query: (member) => ({
                url: "api/members",
                method: "POST",
                body: member
            }),
            invalidatesTags: ["Members"]
        }),
        updateMember: build.mutation({
            query: (member) => ({
                url: "api/members",
                method: "PUT",
                body: member
            }),
            invalidatesTags: ["Members"]
        }),
        deleteMember: build.mutation({
            query: ({_id} ) => ({
                url: "api/members",
                method: "Delete",
                body: {_id} 
            }),
            invalidatesTags: ["Members"]
        })
    })
})

export const {
    useGetAllMembersQuery,
    useAddMemberMutation,
    useUpdateMemberMutation,
    useDeleteMemberMutation
} = membersApiSlice
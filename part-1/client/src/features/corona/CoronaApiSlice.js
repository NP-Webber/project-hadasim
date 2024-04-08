import apiSlice from "../../app/apiSlice";

const coronaApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addCoronaDetails: build.mutation({
            query: (corona) => ({
                url: "/api/corona",
                method: 'POST',
                body: corona
            }),
            providesTags: ["Corona"]
        }),
        gotSick:build.mutation({
            query:(corona)=>({
                url:"/api/corona/got_sick",
                method:"PUT",
                body:corona
            }),
            invalidatesTags:["Corona"]
        })
    })
})
export const {
    useAddCoronaDetailsMutation,
    useGotSickMutation
} = coronaApiSlice
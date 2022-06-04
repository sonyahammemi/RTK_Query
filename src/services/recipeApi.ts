import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const YOUR_APP_KEY = "b895c54e4139f6502fdae0d6cb47ebb0";
const YOUR_APP_ID = "b872402b";


export const recipeApi = createApi({
    reducerPath: "recipeApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.edamam.com/"}),
    endpoints: (builder) => ({
        getRecipes: builder.mutation({
            query: ({query, health}) => {
                return {
                    url:`search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${health}`,                   
                        method:"get",
                };
            },
        }),
    }),
});

export const { useGetRecipesMutation }  = recipeApi;






































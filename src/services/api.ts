import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/01_Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantMenu: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    submitOrder: builder.mutation<any, any>({
      query: (orderData) => ({
        url: 'checkout',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: orderData
      })
    })
  })
})

export const {
  useGetRestaurantQuery,
  useGetRestaurantMenuQuery,
  useSubmitOrderMutation
} = api

export default api

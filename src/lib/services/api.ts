import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AboutSectionType } from 'constants/Abouts'
import { FAQType } from 'constants/FAQs'
import { TourSumSectionType } from 'constants/TourSummary'

const projectId = import.meta.env.VITE_PROJECT_ID
const dataset = import.meta.env.VITE_DATASET
const apiVersion = import.meta.env.VITE_API_VERSION

// https://dmyac1k9.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27tourSummary%27%5D

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`
  }),
  endpoints: (builder) => ({
    getTourSummary: builder.query<TourSumSectionType, void>({
      query: () => ({
        url: '',
        params: {
          query: `*[_type == "tourSummary"]`
        }
      }),
      transformResponse: (response: { result: TourSumSectionType[] }) =>
        response.result?.[0]
    }),
    getFAQ: builder.query<FAQType, void>({
      query: () => ({
        url: '',
        params: {
          query: `*[_type == "faqSection"]`
        }
      }),
      transformResponse: (response: { result: FAQType[] }) =>
        response.result?.[0]
    }),
    getAbout: builder.query<AboutSectionType, void>({
      query: () => ({
        url: '',
        params: {
          query: `*[_type == "aboutSection"]`
        }
      }),
      transformResponse: (response: { result: AboutSectionType[] }) =>
        response.result?.[0]
    })
  })
})

export const { useGetTourSummaryQuery, useGetFAQQuery, useGetAboutQuery } =
  apiSlice

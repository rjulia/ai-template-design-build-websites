import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CmsBlogPageContent,
  CmsCollectionResponse,
  CmsContactPageContent,
  CmsHealth,
  CmsHomePageContent,
} from '@workspace/shared';

const baseUrl = import.meta.env.VITE_CMS_BASE_URL ?? 'http://localhost:1337/api';

export const cmsApi = createApi({
  reducerPath: 'cmsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHealth: builder.query<CmsHealth, void>({
      query: () => '/health',
    }),
    getContactPageBySlug: builder.query<CmsCollectionResponse<CmsContactPageContent>, string>({
      query: (slug) =>
        `/contact-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&status=published`,
    }),
    getBlogPageBySlug: builder.query<CmsCollectionResponse<CmsBlogPageContent>, string>({
      query: (slug) =>
        `/blog-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&status=published`,
    }),
    getHomePageBySlug: builder.query<CmsCollectionResponse<CmsHomePageContent>, string>({
      query: (slug) =>
        `/home-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&status=published`,
    }),
  }),
});

export const { useGetBlogPageBySlugQuery, useGetContactPageBySlugQuery, useGetHealthQuery, useGetHomePageBySlugQuery } =
  cmsApi;

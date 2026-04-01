import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CmsBlogPageContent,
  CmsCartPageContent,
  CmsCheckoutPageContent,
  CmsCollectionResponse,
  CmsContactPageContent,
  CmsHealth,
  CmsHomePageContent,
  CmsSingleProductPageContent,
  CmsShopPageContent,
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
    getShopPageBySlug: builder.query<CmsCollectionResponse<CmsShopPageContent>, string>({
      query: (slug) =>
        `/shop-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&status=published`,
    }),
    getCartPageBySlug: builder.query<CmsCollectionResponse<CmsCartPageContent>, string>({
      query: (slug) =>
        `/cart-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&status=published`,
    }),
    getCheckoutPageBySlug: builder.query<CmsCollectionResponse<CmsCheckoutPageContent>, string>({
      query: (slug) =>
        `/checkout-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&status=published`,
    }),
    getSingleProductPageBySlug: builder.query<CmsCollectionResponse<CmsSingleProductPageContent>, string>({
      query: (slug) =>
        `/single-product-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1&status=published`,
    }),
  }),
});

export const {
  useGetBlogPageBySlugQuery,
  useGetCartPageBySlugQuery,
  useGetCheckoutPageBySlugQuery,
  useGetContactPageBySlugQuery,
  useGetHealthQuery,
  useGetHomePageBySlugQuery,
  useGetSingleProductPageBySlugQuery,
  useGetShopPageBySlugQuery,
} = cmsApi;

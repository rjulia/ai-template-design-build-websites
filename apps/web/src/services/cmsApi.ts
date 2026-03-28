import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CmsHealth } from '@workspace/shared';

const baseUrl = import.meta.env.VITE_CMS_BASE_URL ?? 'http://localhost:1337/api';

export const cmsApi = createApi({
  reducerPath: 'cmsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHealth: builder.query<CmsHealth, void>({
      query: () => '/health',
    }),
  }),
});

export const { useGetHealthQuery } = cmsApi;

type StrapiEnv = {
  (key: string, defaultValue?: string): string;
};

type StrapiConfigContext = {
  env: StrapiEnv;
};

export default ({ env }: StrapiConfigContext) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});

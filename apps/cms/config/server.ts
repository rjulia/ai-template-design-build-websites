type StrapiEnv = {
  (key: string, defaultValue?: string): string;
  int: (key: string, defaultValue?: number) => number;
  array: (key: string, defaultValue?: string[]) => string[];
};

type StrapiConfigContext = {
  env: StrapiEnv;
};

export default ({ env }: StrapiConfigContext) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

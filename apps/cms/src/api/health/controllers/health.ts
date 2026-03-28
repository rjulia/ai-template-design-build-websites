type ControllerContext = {
  body: unknown;
};

const healthController = {
  async index(ctx: ControllerContext) {
    ctx.body = {
      ok: true,
      message: 'Strapi API is running',
      timestamp: new Date().toISOString(),
    };
  },
};

export default healthController;

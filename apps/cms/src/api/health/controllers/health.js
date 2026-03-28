module.exports = {
  async index(ctx) {
    ctx.body = {
      ok: true,
      message: 'Strapi API is running',
      timestamp: new Date().toISOString(),
    };
  },
};

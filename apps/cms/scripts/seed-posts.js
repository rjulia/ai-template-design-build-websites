/* eslint-disable no-console */
const { createStrapi } = require('@strapi/core');

const POST_UID = 'api::post.post';

const postsToSeed = [
  {
    title: 'Designing Calm Interiors for Modern Living',
    slug: 'designing-calm-interiors-for-modern-living',
    excerpt: 'Practical ideas to build a warm, minimal interior without sacrificing personality.',
    content:
      '<p>Calm interiors start with intentional contrast: natural wood textures, soft neutrals, and focused accent tones. Use layered lighting, breathable layouts, and one or two statement pieces to keep rooms expressive but uncluttered.</p><p>Prioritize function first, then style around your day-to-day behavior. This makes the design feel effortless and sustainable long term.</p>',
    author: 'Ramon Julia',
    category: 'Interior Design',
    coverImageUrl: 'https://www.figma.com/api/mcp/asset/99804f66-6146-44c0-951a-27467b1a3c4b',
    publishedOn: '2026-03-20',
  },
  {
    title: 'How to Pick the Right Sofa for Your Space',
    slug: 'how-to-pick-the-right-sofa-for-your-space',
    excerpt: 'A simple sizing and material guide so your sofa fits both your layout and lifestyle.',
    content:
      '<p>Measure your room pathways first, then map the sofa footprint on the floor with painter tape. This reveals circulation issues before you buy.</p><p>For daily-use homes, durable fabrics and neutral tones with removable covers provide the best balance between aesthetics and maintenance.</p>',
    author: 'Ramon Julia',
    category: 'Furniture',
    coverImageUrl: 'https://www.figma.com/api/mcp/asset/818df21b-b94a-448a-ad27-bd0124cee972',
    publishedOn: '2026-03-22',
  },
  {
    title: 'Lighting Layers That Instantly Improve Any Room',
    slug: 'lighting-layers-that-instantly-improve-any-room',
    excerpt: 'Use ambient, task, and accent lighting together for comfort and depth.',
    content:
      '<p>Relying on one ceiling fixture flattens a room. Instead, combine ambient light for base visibility, task light for focused work, and accent light to highlight textures and decor.</p><p>Warm white temperatures and dimmable circuits give you flexibility across morning, work, and evening routines.</p>',
    author: 'Ramon Julia',
    category: 'Lighting',
    coverImageUrl: 'https://www.figma.com/api/mcp/asset/da3077bf-198b-441b-a08e-d95ae3d7749a',
    publishedOn: '2026-03-24',
  },
  {
    title: 'Storage Ideas for Small Apartments',
    slug: 'storage-ideas-for-small-apartments',
    excerpt: 'Five storage strategies that reduce clutter while keeping your home visually light.',
    content:
      '<p>Choose vertical storage, multi-functional furniture, and zone-based organization to reclaim floor space. Closed cabinets hide visual noise, while a few open shelves preserve personality.</p><p>Consistency in baskets, boxes, and labels makes maintenance easier and keeps systems from collapsing over time.</p>',
    author: 'Ramon Julia',
    category: 'Organization',
    coverImageUrl: 'https://www.figma.com/api/mcp/asset/2a521924-e556-477a-aa2d-3ca497ddde61',
    publishedOn: '2026-03-27',
  },
  {
    title: 'Color Pairings That Make Wood Furniture Pop',
    slug: 'color-pairings-that-make-wood-furniture-pop',
    excerpt: 'Palette pairings that complement oak, walnut, and ash without overpowering the room.',
    content:
      '<p>Wood furniture responds best to grounded color families. Pair oak with warm off-whites, walnut with muted greens and charcoal, and ash with cool neutrals and soft blue-gray tones.</p><p>Keep one dominant tone, one supporting tone, and one accent to avoid visual competition.</p>',
    author: 'Ramon Julia',
    category: 'Color',
    coverImageUrl: 'https://www.figma.com/api/mcp/asset/93ee88df-1311-4826-81a9-d46c27da20a8',
    publishedOn: '2026-03-30',
  },
];

async function seedPosts() {
  const appDir = process.cwd();
  const strapi = createStrapi({
    appDir,
    distDir: appDir,
    autoReload: false,
    serveAdminPanel: false,
  });

  try {
    await strapi.load();

    if (!strapi.contentType(POST_UID)) {
      throw new Error(
        `Content type "${POST_UID}" is not registered. Confirm schema exists at src/api/post/content-types/post/schema.json and restart Strapi once.`,
      );
    }

    let created = 0;
    let skipped = 0;

    for (const post of postsToSeed) {
      const existing = await strapi.db.query(POST_UID).findOne({
        where: { slug: post.slug },
        select: ['id', 'slug'],
      });

      if (existing) {
        skipped += 1;
        continue;
      }

      await strapi.documents(POST_UID).create({
        data: post,
        status: 'published',
      });

      created += 1;
    }

    const allPosts = await strapi.db.query(POST_UID).findMany({
      orderBy: { publishedOn: 'desc' },
      select: ['id', 'title', 'slug', 'category', 'publishedOn'],
    });

    console.log(
      JSON.stringify(
        {
          ok: true,
          created,
          skipped,
          totalPosts: allPosts.length,
          posts: allPosts,
        },
        null,
        2,
      ),
    );
  } catch (error) {
    console.error('[seed-posts] Failed:', error);
    process.exitCode = 1;
  } finally {
    await strapi.destroy();
  }
}

seedPosts();

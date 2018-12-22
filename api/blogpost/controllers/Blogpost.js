'use strict';

/**
 * Blogpost.js controller
 *
 * @description: A set of functions called "actions" for managing `Blogpost`.
 */

module.exports = {

  /**
   * Retrieve blogpost records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.blogpost.search(ctx.query);
    } else {
      return strapi.services.blogpost.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a blogpost record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.blogpost.fetch(ctx.params);
  },

  /**
   * Count blogpost records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.blogpost.count(ctx.query);
  },

  /**
   * Create a/an blogpost record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blogpost.add(ctx.request.body);
  },

  /**
   * Update a/an blogpost record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blogpost.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blogpost record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blogpost.remove(ctx.params);
  }
};

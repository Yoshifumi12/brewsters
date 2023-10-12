import { z } from "zod";
import { createTRPCRouter, publicProcedure, } from "~/server/api/trpc";
import { db } from "~/server/db";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      productName: z.string(),
      supplierName: z.string(),
      userName: z.string(),
      userId: z.string(),
      supplierId: z.string(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;

      try {
        const product = await db.products.create({ data: input })
        return product;
      } catch (error) {
        if (error) {
          throw new Error('product already exists');
        }
        throw error;
      }
    }),
  allProducts: publicProcedure
    .query(async () => {
      try {
        const product = await db.products.findMany();
        return product;

      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch product");
      }
    }),
  delete: publicProcedure
    .input(z.object({
      productId: z.string(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;
      await db.products.delete({
        where: { productId: input.productId }
      })
    }),
  editStock: publicProcedure
    .input(z.object({
      productId: z.string(),
      productStock: z.string(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;
      await db.products.update({
        where: {
          productId: input.productId
        },
        data: {
          productStock: parseInt(input.productStock)
        }
      })
    })
});
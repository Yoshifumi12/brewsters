import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      productName: z.string(),
      supplierName: z.string(),
      userId: z.string(),
      supplierId: z.string(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;

      const product = await db.products.create({ data: input })  

      return product;
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
    .mutation(async(opts)=>{
      const {input} = opts;
      await db.products.delete({
        where:{productId: input.productId}
      })
    })
});
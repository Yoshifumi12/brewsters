import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const supplierRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      supplierName: z.string(),
      supplierEmail: z.string(),
      supplierAddress: z.string(),
      userId: z.string()
    }))
    .mutation(async (opts) => {
      const { input } = opts;

      const supplier = await db.suppliers.create({ data: input })

      return supplier;
    }),
  allSuppliers: publicProcedure
    .query(async () => {
      try {
        const supplier = await db.suppliers.findMany();
        return supplier;

      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch supplier");
      }
    }),
  delete: publicProcedure
    .input(z.object({
      supplierId: z.string(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;
      await db.suppliers.delete({
        where: { supplierId: input.supplierId }
      })
    })
});
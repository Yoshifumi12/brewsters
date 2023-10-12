import { z } from "zod";
import { createTRPCRouter, publicProcedure, } from "~/server/api/trpc";
import { db } from "~/server/db";

export const supplierRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      supplierName: z.string(),
      supplierEmail: z.string(),
      supplierAddress: z.string(),
      userId: z.string(),
      userName: z.string(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;

      const existingSupplierEmail = await db.suppliers.findUnique({
        where:{
          supplierEmail: input.supplierEmail
        }
      })
      const existingSupplierName = await db.suppliers.findUnique({
        where:{
          supplierName: input.supplierName
        }
      })

      if(existingSupplierEmail){
        throw new Error("Email Already Exists")
      }

      if(existingSupplierName){
        throw new Error("Supplier Already Exists")
      }
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
    }),
  findByName: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      const supplier = await db.suppliers.findUnique({
        where: {
          supplierName: input
        }
      });
      if (!supplier) {
        throw new Error('supplier not found');
      }
      return supplier;
    }),
});
import { userRouter } from "~/server/api/routers/user";
import { createTRPCRouter } from "~/server/api/trpc";
import { supplierRouter } from "./routers/supplier";
import { productRouter } from "./routers/product";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  supplier: supplierRouter,
  product: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

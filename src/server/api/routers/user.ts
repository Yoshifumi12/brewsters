import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().toLowerCase(),
      password: z.string()
    }))
    .mutation(async (opts) => {
      const { input } = opts;
      const existingUser = await db.user.findUnique({ where: { email: input.email } });

      if (existingUser) {
        throw new Error('Email already exists');
      }

      const user = await db.user.create({ data: input })

      return user;
    }),
  allUsers: publicProcedure
    .query(async () => {
      try {
        const users = await db.user.findMany();
        return users;

      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch users");
      }
    }),
  edit: publicProcedure
    .input(z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      password: z.string(),
      updatedAt: z.date(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;

      const user = await db.user.update({
        where: { id: input.id },
        data: input

      })

      return user;
    }),
  delete: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .mutation(async (opts) => {
      const { input } = opts;
      await db.user.delete({
        where: { id: input.id }
      })
    })
});
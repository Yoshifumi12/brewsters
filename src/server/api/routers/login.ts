import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"
import { db } from "~/server/db";

export const loginRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({
            userId: z.string(),
        }))
        .mutation(async (opts) => {
            const { input } = opts;

            const loginToken = await db.loginToken.create({ data: input })

            return loginToken;
        }),
    delete: publicProcedure
        .input(z.object({
            id: z.string().nonempty(),
        }))
        .mutation(async (opts) => {
            try {
                const { input } = opts;
                await db.loginToken.delete({
                    where: { id: input.id }
                })
            } catch (error) {
                console.log(error)
            }
        }),
    getToken: publicProcedure
        .query(async () => {
            const loginToken = await db.loginToken.findFirst({
                where: {
                    sequenceId: '0'
                }
            })
            if (!loginToken) {
                throw new Error('Not Logged In');
            }
            return loginToken;
        })
})
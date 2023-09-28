import NextAuth from "next-auth";

import { authOptions } from "~/server/auth";
authOptions.debug = true;

export default NextAuth(authOptions);

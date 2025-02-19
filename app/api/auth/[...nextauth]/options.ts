import type { NextAuthOptions } from "next-auth";
import { getSession } from "next-auth/react";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import OsuProvider from "next-auth/providers/osu";
import DiscordProvider from "next-auth/providers/discord";
import BattleNetProvider from "next-auth/providers/battlenet";
type UserType = {
    id: string;
    name: string;
    email: string;
    role?: string;
};

export const options: NextAuthOptions = {
    providers: [
        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string; password: string };

                // Mock user authentication
                const user: UserType = { id: "1", name: "test", email: "test@example.com" };

                if (email === user.email && password === "test") {
                    return user;
                }
                return null;
            }
        }),
        OsuProvider({
            clientId: process.env.OSU_ID as string,
            clientSecret: process.env.OSU_SECRET as string,
          }),
          DiscordProvider({
            clientId: process.env.DISCORD_ID as string,
            clientSecret: process.env.DISCORD_SECRET as string,
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
   
            BattleNetProvider({
              clientId: process.env.BATTLENET_ID as string,
              clientSecret: process.env.BATTLENET_SECRET as string,
              issuer: "https://us.battle.net/oauth"

            })
        
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user as UserType;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as UserType;
            return session;
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 7, // 7 days
    },
};

import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Attach the GitHub User ID (token.sub) to the session 
    async session({ session, token }) {
      session.user.id = token.sub; 
      return session;
    }
  }
};

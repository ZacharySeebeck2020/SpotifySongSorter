import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import SpotifyApi, { LOGIN_URL } from "../../../lib/spotify"

async function RefreshAccessToken(token) {
  try {

    SpotifyApi.setAccessToken(token.accessToken);
    SpotifyApi.setRefreshToken(token.refreshToken);

    const {body: refreshedToken} = await SpotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };

  } catch (error) {

    console.log(error)
    return {
      ...token, 
      error: 'RefreshAccessTokenError '
    };

  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? '',
      authorization: LOGIN_URL
    })
  ],
  secret: process.env.JWT_SECRET ?? '',
  callbacks: {
    async jwt({ token, account, user }) {
      
      // Initial Sign In
      if (account && user) {
        return {
            ...token,
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            accessTokenExpires: account.expires_at ?? 0 * 1000,
            username: account.providerAccountId
        }
      }

      // Token Has Not Expired
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Token Has Expired
      return await RefreshAccessToken(token);

    },

    async session ({ token, session }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  }
})
import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE || 'openid profile',
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  redirectUri:
    `${process.env.NEXT_PUBLIC_URL_SCHEME}${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`,
  postLogoutRedirectUri:
    `${process.env.NEXT_PUBLIC_URL_SCHEME}${process.env.NEXT_PUBLIC_BASE_URL}/`,
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: Number(process.env.SESSION_COOKIE_LIFETIME) || 7200,
  },
})

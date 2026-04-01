export { default } from "next-auth/middleware";

export const config = {
  // Protects the entire application except for Next.js internal paths and the Auth APIs
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};

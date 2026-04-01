import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Optionally, you can pass callbacks here if needed
});

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};

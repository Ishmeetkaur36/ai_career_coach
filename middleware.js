import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId, redirectToSignIn } = auth();

  if (isProtectedRoute(req) && !userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico).*)", // excludes static files, _next, etc.
    "/(api|trpc)(.*)",                    // include all API routes
  ],
};

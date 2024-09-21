
export async function middleware() {
  console.log('Middlewares API')
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};

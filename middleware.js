import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    console.log("my dataa middle");
//   const user = "true";

//   if (!user) {
//     return NextResponse.redirect(URL("/", request.url));
//   }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };

// middleware.tsx
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
const currentUser = request.cookies.get("currentUser")?.value;

if (
    (request.nextUrl.pathname)=="/home"&&
 (!currentUser || Date.now() > JSON.parse(currentUser).expiredAt)
  ) {
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete("currentUser");
    return response;
  }

  if( (request.nextUrl.pathname)=="/" && currentUser){
    return NextResponse.redirect(new URL("/home",request.url));
  }




}


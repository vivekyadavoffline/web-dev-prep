import { NextResponse } from 'next/server';

export default function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: '/about/:path*',
};
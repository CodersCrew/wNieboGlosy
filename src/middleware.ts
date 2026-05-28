import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.redirect('https://wnieboglosy.com/', 308);
}

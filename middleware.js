import { NextResponse } from 'next/server';

const mantenimientoActivo = true; // Pon true para activar mantenimiento, false para desactivar

export function middleware(request) {
  if (!mantenimientoActivo) {
    return NextResponse.next();
  }
  // Permitir acceso solo a la página de mantenimiento
  if (request.nextUrl.pathname === '/mantenimiento') {
    return NextResponse.next();
  }
  // Redirigir todo lo demás a /mantenimiento
  return NextResponse.redirect(new URL('/mantenimiento', request.url));
}

export const config = {
  matcher: '/:path*',
};

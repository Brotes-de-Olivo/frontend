export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  news: '/news',
} as const

export const TOPBAR_HEIGHT = '80px'

export const NAVIGATION_LINKS: {
  label: string
  href: string
}[] = [
  {label: 'Inicio', href: ROUTES.home},
  {label: 'Sobre Nosotros', href: ROUTES.about},
  {label: 'Avisos', href: ROUTES.news},
]

export const BREAKPOINTS_VALUE = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
}

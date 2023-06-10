interface RouteLink {
  path: string
  name: string
  order: string
}

const routeLinkInfo: RouteLink[] = [
  { path: '/home', name: 'Home', order: '00' },
  { path: '/crew', name: 'Crew', order: '01' },
  { path: '/destination', name: 'Destination', order: '02' },
  { path: '/technology', name: 'Technology', order: '03' },
]

export {
  routeLinkInfo,
  type RouteLink
}
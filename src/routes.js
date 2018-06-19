const auth = () => import('./pages/auth-section/')
const home = () => import('./pages/home-section/')
export default [
  { path: '/auth',  component:  auth },
  { path: '/home',  component:  home },
]
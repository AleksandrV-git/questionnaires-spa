
const routes = [
  {
    path: '/',
    component: () => import('src/pages/Main.vue'),
  },
  {
    path: '/form',
    component: () => import('src/pages/Form.vue'),
  },
  {
    path: '/form-edit',
    component: () => import('src/pages/FormEdit.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

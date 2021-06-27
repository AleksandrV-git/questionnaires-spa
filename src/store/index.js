// import Vue from 'vue'
// import { store } from 'quasar/wrappers'
// import Vuex from 'vuex'
// import questionnaires from './questionnaires'

// // import example from './module-example'

// /*
//  * If not building with SSR mode, you can
//  * directly export the Store instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Store instance.
//  */

// Vue.use(Vuex)

// export default function (/* { ssrContext } */) {
//   const store = new Vuex.Store({
//     modules: {
//       questionnaires
//     },

//     // enable strict mode (adds overhead!)
//     // for dev mode and --debug builds only
//     strict: process.env.DEBUGGING
//   })

//   return store
// }
import { createStore } from 'vuex'
import questionnaires from './questionnaires'

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      questionnaires
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
}

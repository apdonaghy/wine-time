import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Google Analytics
import VueAnalytics from 'vue-analytics'
import VueLocalStorage from 'vue-ls';


// font awesome icons
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

let faveWine = {
  namespace: 'wineList__'
};

Vue.use(VueLocalStorage, faveWine);


library.add(faSearch, faCircleNotch, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Google Analytics id
Vue.use(VueAnalytics, {
  id: 'UA-167943063-1',
  router
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


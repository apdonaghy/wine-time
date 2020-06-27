import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Google Analytics
import VueAnalytics from 'vue-analytics'

// font awesome icons
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import {
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

library.add(faSearch, faCircleNotch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Google Analytics id
Vue.use(VueAnalytics, {
  id: 'UA-167943063-1',
  router
})

// this is the object that stores all of the functionality for the wine collection page
const store = Vue.observable({
  wine_collection: {
    collection: [],
    addToCollection(title) {
      if (store.wine_collection.collection.indexOf(title) === -1) {
        store.wine_collection.collection.push(title);
        localStorage.setItem('wine-collection', JSON.stringify(store.wine_collection.collection));

      } else {
        console.log("Item is already in collection.");
      }
    },
    removeItem(wine) {
      store.wine_collection.collection.splice(store.wine_collection.collection.indexOf(wine), 1);
      localStorage.setItem('wine-collection', JSON.stringify(store.wine_collection.collection));

    },
    onLoadFunction() {
      const localWine = JSON.parse(localStorage.getItem('wine-collection'));
      if (localWine) {
        store.wine_collection.collection = localWine;
      } else {
        localStorage.setItem('wine-collection', JSON.stringify(store.wine_collection.collection));
      }
    }
  }
})



Vue.prototype.$store = store

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// this runs the onLoad function to check if a local storage element exists
window.addEventListener('DOMContentLoaded', () => {
  store.wine_collection.onLoadFunction()

});
import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faCircleRight as farCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF } from '@fortawesome/free-brand-svg-icons' 
import { faTwitter } from '@fortawesome/free-brand-svg-icons'
import { faYoutube } from '@fortawesome/free-brand-svg-icons'
import { faInstagram } from '@fortawesome/free-brand-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faHouse, faEnvelope, faLink, farCircleRight, faTwitter, faYoutube, faFacebookF, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

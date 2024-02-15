import './assets/css/main.css'
import { Bootstrap } from 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {router} from "@/router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faBars, faEye, faPenToSquare, faRightFromBracket, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add( faBars, faRightToBracket, faRightFromBracket, faLinkedinIn, faGithub, faPenToSquare, faEye, faLinkedin)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(Bootstrap)
app.use(createPinia())
app.mount('#app')

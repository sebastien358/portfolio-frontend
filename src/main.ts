import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {router} from "@/router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faBars, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {
    faCss3Alt,
    faGithub,
    faHtml5,
    faLinkedinIn,
    faPhp,
    faSymfony,
    faVuejs,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add( faBars, faLinkedinIn, faGithub, faHtml5, faCss3Alt, faSymfony, faVuejs, faPhp, faRightToBracket)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(createPinia())
app.mount('#app')

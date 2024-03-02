import {defineStore} from "pinia";
import axios from "axios";

const BASE_URL= 'https://127.0.0.1:8000'

export const useTechnoStore = defineStore('technoStore', {
    state: () => {
        return {
            technos: [],
            editTechno: null
        }
    },
    actions: {
        async getTechno() {
            try {
                const response = await axios.get('https://api.dymawonder.fr/techno/list')
                this.technos = response.data
            } catch(e) {
                console.error(e)
            }
        }
    }
})
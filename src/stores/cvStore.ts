import {defineStore} from "pinia";
import axios from "axios";

const BASE_URL= 'https://127.0.0.1:8000/cv'

export const useCvStore = defineStore('cvStore', {
    state: () => {
        return {
            cv: [],
        }
    },
    actions: {
        async getCv() {
            try {
                const response = await axios.get(`${BASE_URL}/list`)
                this.cv = response.data
            } catch(e) {
                console.error(e)
            }
        }
    }
})
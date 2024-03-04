import {defineStore} from "pinia";
import axios from "axios";

export const useFormationStore = defineStore('formationStore', {
    state: () => {
        return {
            formations: [],
        }
    },

    actions: {
        async getFormations() {
            try {
                 const response = await axios.get('https://api.dymawonder.fr/formation/list', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.formations = response.data
            } catch(e) {
                console.log(e)
            }
        }
    }
})
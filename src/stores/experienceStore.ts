import {defineStore} from "pinia";
import axios from "axios";

export const useExperienceStore = defineStore('experienceStore', {
    state: () => {
        return {
            experiences: []
        }
    },
    actions: {
        async getExperiences() {
            try {
                const response = await axios.get(`https://api.dymawonder.fr/experience/list`)
                this.experiences = response.data
            } catch(e) {
                console.log(e)
            }
        }
    }
})
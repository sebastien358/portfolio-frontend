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
                const response = await axios.get(`https://127.0.0.1:8000/experience/list`)
                this.experiences = response.data
            } catch(e) {
                console.log(e)
            }
        }
    }
})
import {defineStore} from "pinia";
import axios from "axios";

export const useProjectStore = defineStore('projectStore', {
    state: () => {
        return {
            projects: [],
            editProject: null
        }
    },
    actions: {
       async getProducts() {
           try {
               const response = await axios.get('https://127.0.0.1:8000/project/list')
               this.projects = response.data
           } catch(e) {
               console.error(e)
           }
       },
        async getCurrentProduct(id: number) {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/project/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editProject = response.data
            } catch(e) {
                console.error(e)
            }
        },
    }
})
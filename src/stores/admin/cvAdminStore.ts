import {defineStore} from "pinia";
import axios from "axios";

const BASE_ADMIN_URL= 'https://127.0.0.1:8000/admin/cv'

export const useCvAdminStore = defineStore('cvAdminStore', {
    state: () => {
        return {
            editCv: null
        }
    },
    actions: {
        async initCv() {
            this.editCv = {
                pictures: []
            }
        },
        async cvCreate(pictures: Object) {
            const formData = new FormData()
            for (let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }
            try {
                await axios.post(`${BASE_ADMIN_URL}/new`, formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    },
                    'Content-type': 'multipart/form-data'
                })
            } catch(e) {
                console.error(e)
            }
        }
    }
})
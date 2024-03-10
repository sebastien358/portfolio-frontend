import {defineStore} from "pinia";

export const useMessageStore = defineStore('messageStore', {
    state: () => {
        return {
            message: null,
            type: null
        }
    },
    actions: {
        addMessage(message, type) {
            this.message = message
            this.type = type
        },
        intMessage() {
            this.message = null
            this.type = null
        }
    }
})
const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            visible: true,
            inputBackgroundColor: '',
        }
    },
    computed: {
        paraClasses(){
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.visible,
                hidden: !this.visible
            }
        }
    },
    methods: {
        display(){
            this.visible = !this.visible
        }
    },
})

app.mount('#assignment')
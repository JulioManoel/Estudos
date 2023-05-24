const app = Vue.createApp({
    data() {
        return {
            name1: '',
            name2: '',
        }
    },
    methods: {
        showAlert(){
            alert("oiii")
        },
        registerName1(event){
            this.name1 = event.target.value
        },
        registerName2(event){
            this.name2 = event.target.value
        }
    },
})

app.mount('#assignment')
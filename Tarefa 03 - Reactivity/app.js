 const app = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },
    watch: {
        result(){
            const that = this
            setTimeout(()=>{
                that.number = 0
            },5000)
        }
    },
    computed: {
        result(){
            if(this.number < 37){
                return 'Not there yet!'
            }
            else if(this.number > 37){
                return 'Too much!'
            }
            return this.number
        }
    },
    methods: {
        addNumber(num){
            this.number += num
        }
    },
})

app.mount('#assignment')
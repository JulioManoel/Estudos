const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Oiiii',
            courseGoalB: 'Tchauuu',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random()
            const text = (randomNumber < 0.5) ? this.courseGoalA : this.courseGoalB
            return text
        }
    }
})

app.mount('#user-goal')
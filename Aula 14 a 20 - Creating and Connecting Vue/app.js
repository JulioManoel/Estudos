const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Oiiii',
            courseGoalB: '<h2>Tchauuu</h2>',
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
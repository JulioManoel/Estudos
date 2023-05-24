Vue.createApp({
  data() {
    return {
      goals: [],
      value: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.value);
      this.value = "";
    },
  },
}).mount("#app");

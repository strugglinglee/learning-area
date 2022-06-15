const App = {
  data() {
    return {
      control: 0,
    };
  },
  methods: {
    changeControl() {
      if (this.control < 3) {
        this.control++;
      } else {
        this.control = 0;
      }
    },
  },
};

Vue.createApp(App).mount("#app");

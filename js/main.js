const Counter = {
  data(){
    return { // Dentro del parentésis hay un objeto JSON. Por eso no lleva ;
      counter: 0
    }
  },
  mounted(){
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}

Vue.createApp(Counter).mount('#counter');
const EventHandling = {
  data(){
    return {
      message: 'Este es el mensaje'
    }
  },
  methods: {
    mensajeAlReves(){
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

Vue.createApp(EventHandling).mount('#event-handling');
const HelloVueApp = {
  data(){
    return {
      message: 'Hola Vue 3'
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue');


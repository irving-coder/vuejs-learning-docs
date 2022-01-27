const Bucles = {
  data(){
    return {
      message: 'Hola Vue !',
      lista: [
        {texto: 'Primer elemento'},
        {texto: 'Segundo elemento'},
        {texto: 'Tercer elemento'},
        {texto: 'Cuarto elemento'}
      ]
    }
  }
}

Vue.createApp(Bucles).mount('#bucles');
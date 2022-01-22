const AttributeBinding = {
  data(){
    return {
      message: 'Cargaste esta página el ' + new Date().toLocaleString()
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute');
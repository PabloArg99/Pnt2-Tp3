
export default {
  name: 'src-componentes-formulario',
  components: {
   
    

  },
  props: [
  ],
  data () {
    return {
      
      formDirty: this.getInicialData(),
      emailIngresado : "",
      nombreIngresado :"",
      edadIngresada : 0
    }
  },
  computed: {
    comprobarMail(){
      let mailVerificado= false
      
      const primerParametroVerificacion="@"
      const segundoParametroVerificacion="."
        
          
          if(this.emailIngresado.includes(primerParametroVerificacion) && this.emailIngresado.includes(segundoParametroVerificacion)){
            mailVerificado = true
            
          }

      
      return mailVerificado
    },
    comprobarNombre(){
      let nombreVerificado = false
      if(this.nombreIngresado.length >= 5 && this.nombreIngresado.length <= 15){
        nombreVerificado = true
      }
      return nombreVerificado

    },
    comprobarEdad(){
      let edadVerificada = false

      if(this.edadIngresada >= 18 && this.edadIngresada <= 120){
        edadVerificada = true
      }


      return edadVerificada
    }

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        edad: null,
        email: null
      }
    },
    validarBotonEnvio() {
      return (
        !this.comprobarNombre || !this.comprobarMail || !this.comprobarEdad
      ) 
    },
    enviar() {
      this.emailIngresado = "",
      this.nombreIngresado = "",
      this.edadIngresada = 0,
      
      this.formDirty = this.getInicialData()
       
    }
  }
}



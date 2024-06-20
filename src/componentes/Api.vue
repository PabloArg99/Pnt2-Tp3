<template>

    <section class="src-componentes-api">
      <!-- <pre>{{ usuarios }}</pre> -->
  
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-info">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            
            <td>{{usuario.nombre}}</td>
            <td>{{usuario.email}}</td>
            <td>{{usuario.telefono}}</td>
            
          </tr>
        </table>    
      </div>
      <h4 class="alert alert-danger" v-else>No se encontraron usuarios</h4>    
    </section>
  
  </template>
  
  <script>
    import * as servicioUsuarios from '../servicios/usuarios'
  
    export default  {
      name: 'src-componentes-api',
      components: {
        
      },
      props: [],
      mounted () {
        this.getusuarios()
      },
      data () {
        return {  
          usuarios: [],
          mostrar: false,
          editarID: null,
          usuarioID: {},
          //-----
          mostrar2: false,
          borrarID: null,
  
        }
      },
      methods: {
        
  
        // --------------------- Servicio API --------------------------
        async getusuarios() {
          const usuarios = await servicioUsuarios.getAll()
          this.usuarios = usuarios
        }                 
      },
      computed: {
  
      }
  }
  
  
  </script>
  
  
  
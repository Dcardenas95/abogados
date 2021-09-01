<template>
<div>
    <div class="create" @click="showRegister = true">
      <i class='bx bx-plus' ></i>
    </div>
    <div class="client-container">
      <h1>Abogados</h1>
      <div class="client-content">
        <div class="fields">
          <h3>Cédula</h3>
          <h3>Nombre</h3>
          <h3>Apellido</h3>
          <h3>Dirección</h3>
          <h3>Teléfono</h3>
          <h3>Acción</h3>
        </div>

        <List
              v-for="i in listPersons"
              :cedula="i.cedula"
              :nombre="i.nombre"
              :apellido="i.apellido"
              :numero="i.numero"
              :direccion="i.direccion"
        />

      </div>
    </div>

    <router-view></router-view>

    <div v-if="showRegister" class="form-content">
        <i class='bx bx-x' @click="showRegister = false" ></i>
        <div class="form-item">
            <h3>Cédula</h3>
            <input v-model='cedula' type="text">
        </div>
        <div class="form-item">
            <h3>Nombre</h3>
            <input v-model="nombre" type="text">
        </div>
        <div class="form-item">
            <h3>Apellido</h3>
            <input v-model="apellido" type="text">
        </div>
        <div class="form-item">
            <h3>Número</h3>
            <input v-model="numero" type="text">
        </div>
        <div class="form-item">
            <h3>Dirección</h3>
            <textarea v-model="direccion" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="button" @click="sendData">Crear</div>
    </div>

</div>
</template>

<script>
import List from '../components/List';

export default {
  components: {
    List
  },
  data() {
    return {
      showRegister: false,

      listPersons: [],

      id: '',
      cedula: '',
      nombre: '',
      apellido: '',
      numero: '',
      direccion: ''
    }
  },
  created(){
    document.title = 'Abogados'
    this.getLawyer();
  },
  methods: {
      getLawyer() {
            let me=this;
            var url= '/lawyer/index';
            axios.get(url).then(function (response) {
                    let res = (response.data)
                    me.listPersons = res
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    sendData(){
      let data = {
        cedula : this.cedula,
        nombre : this.nombre,
        apellido : this.numero,
        numero : this.numero,
        direccion: this.direccion
      }
      this.listPersons.push(data)
      this.showRegister = false;


      this.id = ''
      this.cedula = ''
      this.nombre = '',
      this.apellido = '',
      this.numero = '',
      this.direccion = ''

      console.log(data)
    },
  }
}
</script>

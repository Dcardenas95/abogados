<template>
<div>
    <div class="create" @click="showRegister = true">
        <i class='bx bx-plus' ></i>
    </div>
    <div class="client-container">
      <h1>Casos</h1>
      <div class="client-content">
        <div class="fields">
          <h3>Número del caso</h3>
          <h3>Abogado</h3>
          <h3>Cliente</h3>
          <h3>Estado</h3>
          <h3>Acción</h3>
        </div>

        <List
            v-for="i in listCases"
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
            <h3>Número del caso</h3>
            <select name="nombreClients" id="">
                <option v-for="i in listLawyers" :value="i.nombre">{{i.nombre}} {{ i.apellido}}</option>
            </select>
        </div>

        <div class="form-item">
            <h3>Abogado</h3>
            <select name="nombreClients" id="">
                <option v-for="i in listCases" :value="i.nombre">{{i.nombre}}</option>
            </select>
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

        listLawyers: [],
        listCases: [],
    }
  },
  created(){
    document.title = 'Asignación de casos'
    this.getList();
  },
  methods: {
    getList(){

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

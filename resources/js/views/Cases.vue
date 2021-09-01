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
            <h3>Nombre del cliente</h3>
            <h3>Tipo de caso</h3>
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
            <h3>Número del caso</h3>
            <input class="form-control form-control-lg"  v-model="numeroCaso" type="text" >
        </div>
        <div class="form-item">
            <h3>Nombre del cliente</h3>
            <select name="nombreClients" id="">
                <option v-for="i in nombreCliente" :value="i.nombre">{{i.nombre}} {{ i.apellido}}</option>
            </select>
        </div>

        <div class="form-item">
            <h3>Estado</h3>
            <select name="nombreClients" id="">
                <option v-for="i in status" :value="i.nombre">{{i.status}}</option>
            </select>
        </div>
        <div class="form-item">
            <h3>Tipo de caso</h3>
            <input type="text">
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
    mounted(){

    },

    data() {
    return {

    showRegister: false,

    listPersons: [],
    status: [
            {'status': 'Inicio'},
            {'status': 'Finalizado'},
            {'status': 'proceso'}
        ],

        numeroCaso: '',
        nombreCliente: [
            {
                'nombre': '',
                'apellido': ''
            },

        ],

        descripcion: '',
    }
  },
    created(){
        document.title = 'Casos'
        this.getCases();
    },
  methods: {

    getCases() {
        let me=this;
        var url= '/caso/index';
        axios.get(url).then(function (response) {
                let res = (response.data)
                console.log(res)
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

    getCustomer() {
            let me=this;
            var url= '/caso/listcustomer';
            axios.get(url).then(function (response) {
                    let res = (response.data)
                    console.log(res)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>

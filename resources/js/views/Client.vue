<template>
    <div>
        <div class="create" @click="showRegister = true">
            <i class="bx bx-plus"></i>
        </div>
        <div class="client-container">
            <h1>Clientes</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Número</th>
            <th scope="col">direccion</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
         <List
                    v-for="i in listPersons"
                    :cliente_id="i.id"
                    :cedula="i.cedula"
                    :nombre="i.nombre"
                    :apellido="i.apellido"
                    :telefono="i.telefono"
                    :direccion="i.direccion"
                   
                />
      </table>
        </div>

        <router-view></router-view>

        <div v-if="showRegister" class="form-content">
            <i class="bx bx-x" @click="showRegister = false"></i>
            <div class="form-item">
                <h3>Cédula</h3>
                <input class="form-control form-control-lg"  v-model="cedula" type="text" >
            </div>
            <div class="form-item">
                <h3>Nombre</h3>
                <input class="form-control form-control-lg"  v-model="nombre" type="text" >
            </div>
            <div class="form-item">
                <h3>Apellido</h3>
                <input class="form-control form-control-lg" v-model="apellido" type="text" >
            </div>
            <div class="form-item">
                <h3>Telefono</h3>
                <input class="form-control form-control-lg" v-model="telefono" type="text" >
            </div>
            <div class="form-item">
                <h3>Dirección</h3>
                <textarea class="form-control"   v-model="direccion" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="button" @click="sendData">Crear Cliente</div>
        </div>
    </div>
</template>

<script>
import List from "../components/List";

export default {
    components: {
        List
    },
    data() {
        return {
            showRegister: false,

            listPersons: [],
            cliente_id: "",
            cedula: "",
            nombre: "",
            apellido: "",
            direccion: "",
            telefono:""
        };
    },
    created() {
        document.title = "Clientes";
        this.getList();
    },
    methods: {

        getList() {
            let me=this;
            var url= 'customer/index';
            axios.get(url).then(function (response) {
                    let res = (response.data)
                    me.listPersons = res
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        sendData() {
            let data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                telefono: this.telefono,
                direccion: this.direccion
            };
            axios.post('/customer/create', data).then(function (response) {
                    this.listPersons.push(data)
                    this.showRegister = false
                }).catch(function (error) {
                    console.log(error);
            });

            this.getList();
        }
    }
};
</script>

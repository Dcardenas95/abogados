<template>
    <div class="user-profile-container">
        <div class="user-profile-content">

            <div class="information">
                <h3>Nombre</h3>
                <input v-model="nombreModel" type="text">
            </div>

            <div class="information">
                <h3>Apellido</h3>
                <input v-model="apellidoModel" type="text">
            </div>

        </div>

        <div class="user-profile-content">
            <div class="information">
                <h3>Cédula</h3>
                <input v-model="cedulaModel" type="text">
            </div>

            <div class="information">
                <h3>Teléfono</h3>
                <input v-model="numeroModel" type="text">
            </div>
        </div>

        <div class="direction-content">
            <div class="direction">
                <h3>Dirección</h3>
                <textarea v-model="direccionModel" cols="30" rows="10"></textarea>
            </div>
        </div>

        <div class="buttons">
            <div class="save" @click="save">Modificar<i class='bx bx-plus' ></i></div>
        </div>

    </div>
</template>

<script>
export default {
    props: [
        'cedula',
        'nombre' ,
        'apellido',
        'direccion',
        'telefono',
        'cliente_id',
    ],
    data() {
        return {
            cliente_idModel:this.cliente_id,
            cedulaModel: this.cedula,
            nombreModel: this.nombre,
            apellidoModel: this.apellido,
            direccionModel: this.direccion,
            numeroModel: this.telefono
        }
    },
    methods: {
        toBack(){

        },

        save(){

            let data = {
                id: this.cliente_idModel,
                cedula : this.cedulaModel,
                nombre : this.nombreModel,
                apellido : this.apellidoModel,
                telefono : this.numeroModel,
                direccion: this.direccionModel
            }


            axios.put('/customer/actualizar', data).then(function (response) {
                return true
            }).catch(function (error) {
                console.log(error);
            });

            this.$router.go(-1)

        },

        getData(client_id){
            let data = {
                'costumer_id': client_id,

            }
            axios.get()

        }
    }
}
</script>

<style lang="scss">
.user-profile-container{
    padding: 1rem;
    background-color: #fff;
    border-radius: 2rem;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,.25);
    .user-profile-content{
        display: flex;
        justify-content: space-around;
        .information{
            margin: .75rem 0;
            h3{
                font-size: var(--normal-font-size);
                color: var(--first-color);
            }
            input{

            }
        }
    }
    .direction-content{
        display: flex;
        margin: 1rem 0;
        justify-content: center;
        .direction{
            h3{
                text-align: center;
                color: var(--first-color);
            }
        }
    }
    .buttons{
        display: flex;
        justify-content: center;
        .save, .delete{
            margin: 0 1rem;
            border-radius: .85rem;
            color: var(--background-light);
            cursor: pointer;
            padding: 1rem;
        }
        .save{
            background-color: green;
        }
        .delete{
            background-color: red;
        }
    }
}
</style>

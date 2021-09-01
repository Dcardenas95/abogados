<template>
    <div class="form-content">
        {{nombre}}
        <i class='bx bx-x'></i>
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
            <input type="text" v-model="numero">
        </div>
        <div class="form-item">
            <h3>Dirección</h3>
            <textarea v-model="direccion" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="button" @click="registerData">Crear</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            cedula: '',
            nombre: '',
            apellido: '',
            numero: '',
            direccion: ''
        }
    },
    methods: {
        registerData(){
            let data = {
                cedula : this.cedula,
                nombre : this.nombre,
                apellido : this.numero,
                numero : this.numero,
                direccion: this.direccion
            }
            console.log(data)
        }
    }
}
</script>


<style lang="scss">

</style>
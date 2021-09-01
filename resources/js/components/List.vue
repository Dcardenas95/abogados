

<template>
<tbody>
        <tr>
            <th scope="row">{{id}}</th>
            <td>{{cedula}}</td>
            <td>{{nombre}}</td>
            <td>{{apellido}}</td>
            <td>{{telefono}}</td>
            <td>{{direccion}}</td>
            <td>
                <router-link :to="{'name': 'Editing', params: {'cedula': cedula, 'nombre': nombre, 'apellido': apellido, 'direccion': direccion, 'telefono': telefono , 'cliente_id':cliente_id }}">
                    <div class="actions">
                        <i class='bx bxs-pencil' ></i>
                    </div>
                </router-link>
            </td>

        </tr>
    </tbody>
</template>

<script>
export default {
    props: {
        'cliente_id':{ type:Number},
        'cedula': { type: String},
        'nombre' : { type: String},
        'apellido': { type: String},
        'direccion': { type: String},
        'telefono': { type: String},
    }
}
</script>

<style lang="scss">
.list-content{
    .item{
        display: flex;
        justify-content: space-between;
        margin: .85rem 0;
        h3{
            font-size: var(--small-font-size);
        }
        .actions{
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            i{
                font-size: 1.2rem;
                color: green;
            }

        }
    }
}
</style>

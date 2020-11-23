<template>
<div class="container">
    <div class="row justify-content-md-center">
        <div class="col-6">

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th># Id Tienda</th>
                        <th>Nombre Tienda</th>
                        <th>Fecha Apertura Tienda</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tienda in tiendas">
                        <td>{{ tienda.id }}</td>
                        <td>{{ tienda.nombre }}</td>
                        <td>{{ tienda.fecha_apertura }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: ['id', 'Nombre', 'Apertura'],
            items: null,
            tiendas: []
        }
    },
    methods: {
        async getTiendas() {
            let datos = await axios.get(`http://localhost:84/api/tienda`, {
                headers: {
                    "Content-Type": "text/json",
                    "Authorization": 'Bearer ' + sessionStorage.getItem('token')

                }
            });
            let tiendas = datos.data.data;
            console.log(tiendas);
            this.tiendas = tiendas;
        }
    },
    created() {
        this.getTiendas()
    }
}
</script>

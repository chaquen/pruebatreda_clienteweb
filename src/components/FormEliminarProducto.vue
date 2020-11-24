<template>
<div class="container">
    <div class="row justify-content-md-center">
        <h4 class="col-6">Formulario para eliminar un producto</h4>
        <br>
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-6">
            <b-form-group>
                <b-form-input v-model="sku_search" placeholder="SKU del producto que desea eliminar"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button variant="success" v-on:click="search()">Buscar producto</b-button>
            </b-form-group>
        </b-form>
    </div>
    <div class="row justify-content-md-center">
        <b-form class="col-10">
            <div>
                <b-table striped hover :items="items" :fields="fields"></b-table>
            </div>
            <b-form-group>
                <b-button variant="info">Eliminar producto</b-button>
            </b-form-group>
        </b-form>
    </div>
</div>
</template>

<script>

import axios from 'axios';
export default {
    data() {
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: ['id', 'Nombre', 'sku', 'Descripción', 'Valor', 'Tienda', 'Imagen'],
            items: [],
            sku_search:''
        }
    },
    methods:{
        async search() {
            let currentObj = this;
            await axios.get(`http://localhost:84/api/getProduct/`+this.sku_search, {
                headers: {
                    "Content-Type": "text/json",
                    "Authorization": 'Bearer ' + sessionStorage.getItem('token')
                }
            }).then(function(datos){
                currentObj.items = datos.data.data[0];
            });
            
            /*this.nombrep = datos.data.data[0].nombre;
            this.sku = datos.data.data[0].sku;
            this.descripcion = datos.data.data[0].descripcion;
            currentObj.valor = datos.data.data[0].valor;
            currentObj.tienda_id = datos.data.data[0].tienda_id.nombre;*/
            
        },
    }
}
</script>

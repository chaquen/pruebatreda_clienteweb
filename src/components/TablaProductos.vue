<template>
<div class="container">
    <div class="row justify-content-md-center">
        <div class="col-6">
            <b-form-group>
            <b-form-select v-model="selected" :options="options" class="mb-3" v-on:change="search()">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Seleccione la tienda</b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <!--<b-form-select-option value="C">Tienda 1</b-form-select-option>
                <b-form-select-option value="D">Tienda 2</b-form-select-option>-->
                <option v-for="opt in options" :key="opt.id" :value="opt.id">{{  opt.nombre }}</option>
            </b-form-select>
        </b-form-group>
                <div >
                    
                    <b-card no-body class="overflow-hidden" style="max-width: 540px;" v-for="pro in products" :key="pro.id" cols="1" cols-sm="2" cols-md="4" cols-lg="6">
                        <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="pro.imagen" alt="Imagen base 64" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body :title="pro.nombre">
                            <b-card-text>SKU: {{pro.sku}}</b-card-text>
                            <b-card-text>Descripción: {{pro.descripcion}}</b-card-text>
                            <b-card-text>Valor: $ {{pro.valor}}</b-card-text>
                            </b-card-body>
                        </b-col>
                        </b-row>
                    </b-card>
                    
                </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            
            fields: ['id', 'Nombre', 'Apertura'],
            items: null,
            products: [],
            options:[],
            selected:null
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
            this.options = tiendas;
        },
        async search(){
            let prod =  await axios.get('http://localhost:84/api/products/'+this.selected, {
                headers: {
                    "Content-Type": "text/json",
                    "Authorization": 'Bearer ' + sessionStorage.getItem('token')
                }
            });
            
            this.products = prod.data.data
            
           
        },
    },    
    created() {
        this.getTiendas()    
    }
}
</script>

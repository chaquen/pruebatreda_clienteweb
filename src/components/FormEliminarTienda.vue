<template>
<div class="container">
    <h4>Formulario para editar una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-select v-model="selected" :options="options" class="mb-3">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Seleccione la tienda para editar --</b-form-select-option>
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <!--<b-form-select-option value="C">Tienda 1</b-form-select-option>
                <b-form-select-option value="D">Tienda 2</b-form-select-option>-->
                <option v-for="opt in options" :key="opt.id" :value="opt.id">{{  opt.nombre }}</option>
            </b-form-select>
        </b-form-group>
        <b-form-group>
            <b-button variant="info" v-on:click="search()">Buscar tienda</b-button>
        </b-form-group>
    </b-form>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="text" placeholder="Nombre de la tienda"></b-form-input>
        </b-form-group> 
        
        <b-button variant="danger" v-on:click="del()">Eliminar Tienda</b-button>
    </b-form>

</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            selected: null,
            text: '',
            options: [],
        }
    },
    /*mounted: function ()
    {
        this.getTienda()
    },*/
    methods: {
        async getTienda() {
            let datos = await axios.get(`http://localhost:84/api/tienda`, {
                headers: {
                    "Content-Type": "text/json",
                    "Authorization": 'Bearer ' + sessionStorage.getItem('token')
                }
            });
            let tiendas= datos.data.data.map(function(d){
                if(d.nombre != undefined){
                    return {
                                nombre:d.nombre,
                                fecha_apertura:d.fecha_apertura,
                                id:d.id
                            }                 
                }
            });
            
            this.options = tiendas;
            
        },
        search() {
            let currentObj = this;
            this.axios.get('http://localhost:84/api/tienda/'+currentObj.selected, {
                nombre: this.nombre,
                fecha_apertura: this.fecha_apertura
            },{
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }}).then(function (response) {
                console.log(response.data.data.nombre);
                if(response.data.success){
                    currentObj.text = response.data.data.nombre;         
                    
                }else{
                    currentObj.msn = 'No se ha podido crear la tienda';
                }                
            }).catch(e => {
                console.log(e);
            });
        },
        del() {
             let currentObj = this;
            this.axios.delete('http://localhost:84/api/tienda/'+currentObj.selected, {
                nombre: this.text
                
            },{
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }}).then(function (response) {
                console.log(response.data.data.nombre);
                if(response.data.success){
                    currentObj.text = response.data.data.nombre;         
                    currentObj.$router.push({ name: 'Tiendas' });
                }else{
                    currentObj.msn = 'No se ha podido crear la tienda';
                }                
            }).catch(e => {
                console.log(e);
            });
        }
    },
    created() {
        this.getTienda()
    }

}
</script>

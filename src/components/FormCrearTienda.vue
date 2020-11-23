<template>
<div class="container">
    <h4>Formulario para crear una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="nombre" placeholder="Nombre de la tienda"></b-form-input>
        </b-form-group>
        <b-form-group>
            <label for="example-datepicker">Fecha de apertura</label>
            <b-form-datepicker id="example-datepicker" v-model="fecha_apertura" class="mb-2"></b-form-datepicker>
        </b-form-group>
        <b-button variant="info" v-on:click="crearTienda()">Crear Tienda</b-button>
    </b-form>

</div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            nombre:'',
            fecha_apertura: '',  
            msn: ''
        }
        
    },    
    methods: {
        crearTienda() {
            let currentObj = this;
            this.axios.post(`http://localhost:84/api/tienda`, {
                nombre: this.nombre,
                fecha_apertura: this.fecha_apertura
            },{
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }}).then(function (response) {
                console.log(response);
                if(response.data.success){
                    currentObj.msn = response.mensaje;         
                    currentObj.$router.push({ name: 'Tiendas' });
                }else{
                    currentObj.msn = 'No se ha podido crear la tienda';
                }                
            }).catch(e => {
                console.log(e);
            });
        }
    }
}
</script>

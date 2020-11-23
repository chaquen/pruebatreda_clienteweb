<template>
<div class="container">
    <h4>Formulario para registro</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="nombre" placeholder="nombre"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="correo" placeholder="correo"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input type="password" v-model="clave" placeholder="clave"></b-form-input>
        </b-form-group>
        <b-button variant="info" v-on:click="crearUser()">Registrar</b-button>
        <h4>{{msn}}</h4>
    </b-form>

</div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            nombre:'',
            correo: '',
            clave: '',
            msn: ''
        }
        
    },
    mounted: function()
    {
            this.crearUser();
    },
    methods: {
        crearUser() {
            let currentObj = this;
            this.axios.post(`http://localhost:84/api/register`, {
                name: this.nombre,
                email: this.correo,
                password: this.clave
            }).then(function (response) {
                if(response.data.sucess){
                    console.log(response,response.data.token);
                    currentObj.msn = response.mensaje;
                }else{
                    currentObj.msn = 'No se ha podido crear el usuario';
                }
                
            }).catch(e => {
                console.log(e);
            });
        }
    }
}
</script>

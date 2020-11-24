<template>
<div class="container">
    <h4>Login</h4>
    <br>
    <b-form class="col-6">
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
            this.axios.post(`http://localhost:84/api/login`, {
                name: this.nombre,
                email: this.correo,
                password: this.clave
            }).then(function (response) {
                console.log(response);
                if(response.data.success){
                    sessionStorage.setItem('token',response.data.token);                    
                    sessionStorage.setItem('name',response.data.name);                    
                    currentObj.$router.push({ name: 'Home' });
                }else{
                    currentObj.msn = '';
                }
                
            }).catch(e => {
                console.log(e);
            });
        }
    }
}
</script>

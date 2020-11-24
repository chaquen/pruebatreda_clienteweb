<template>
<div class="container">
    <h4>Formulario para editar una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input id="nombre" v-model="nombre" placeholder="Nombre del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="sku" placeholder="SKU del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="descripcion" placeholder="Descripción del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model.number="valor" placeholder="Valor del poducto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-file v-model.file="file" :state="Boolean(file)" placeholder="Seleccione el archivo..." drop-placeholder="Arrastre el archivo aquí..."></b-form-file>
        </b-form-group>
        <b-form-group>
            <b-form-select v-model="selected" :options="options" class="mb-3">
                <!-- This slot appears above the options from 'options' prop -->
                <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Seleccione la tienda para editar --</b-form-select-option>
                </template>
                <!-- These options will appear after the ones from 'options' prop -->
                <!--<b-form-select-option value="C">Tienda 1</b-form-select-option>
                <b-form-select-option value="D">Tienda 2</b-form-select-option>-->
                <option v-for="opt in options" :key="opt.tienda_id" :value="opt.tienda_id">{{  opt.nombre }}</option>
            </b-form-select>
        </b-form-group>
        <b-form-group>
            <b-button variant="info" v-on:click="create()">Crear Producto</b-button>
        </b-form-group>
    </b-form>

</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            selected: null,
            nombre: '',
            descripcion:'',
            sku:'',
            valor:'',
            tienda_id:'',
            options: [],
            file:[],
            value:''
        }
    },
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
                                tienda_id:d.id
                            }                 
                }
            });
            
            this.options = tiendas;
            
        },
        create() {
            let currentObj = this;

            let formData = new FormData();
            console.log(this.file);
            formData.append('imagen', this.file);
            /*
                {
                    nombre: this.nombre,
                    sku: this.sku,
                    descripcion: this.descripcion,
                    valor:this.valor,
                    file:this.file
                }
            */
            formData.append("nombre",this.nombre);
            formData.append("sku",this.sku);
            formData.append("descripcion",this.descripcion);
            formData.append("valor",this.valor);
            formData.append("tienda_id",this.selected);
            this.axios.post('http://localhost:84/api/products', formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }}).then(function (response) {
                console.log(response.data.data.nombre);
                if(response.data.success){
                    currentObj.text = response.data.data.nombre;         
                    currentObj.$router.push({ name: 'Productos' });
                }else{
                    currentObj.msn = 'No se ha podido crear el producto';
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

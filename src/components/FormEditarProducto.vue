<template>
<div class="container">
    <h4>Formulario para editar una tienda</h4>
    <br>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input  v-model="sku_search" placeholder="Sku del producto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-button v-on:click="search()"  variant="success">Buscar Producto</b-button>
        </b-form-group>
    </b-form>
    <b-form class="col-6">
        <b-form-group>
            <b-form-input v-model="nombrep" value="" placeholder="Nombre del producto"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="sku" value="" placeholder="SKU"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="descripcion" value="" placeholder="Descripción"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="valor" value="" placeholder="Valor"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input v-model="tienda_id" value="" placeholder="Tienda"></b-form-input>
        </b-form-group>
        <!--b-form-group>
            <b-form-file v-model.file="file1" :state="Boolean(file1)" placeholder="Buscar archivo de la imagen" drop-placeholder="Drop file here..."></b-form-file>
        </b-form-group>-->
        <b-form-group>
            <b-button variant="danger">Editar Producto</b-button>
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
            nombrep: '',
            descripcion:'',
            sku:'',
            valor:'',
            tienda_id:'',
            options: [],
            file1:[],
            value:'',
            sku_search
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
        async search() {
            let currentObj = this;
            let datos = await axios.get(`http://localhost:84/api/getProduct/`+this.sku_search, {
                headers: {
                    "Content-Type": "text/json",
                    "Authorization": 'Bearer ' + sessionStorage.getItem('token')
                }
            });
            
            this.nombrep = datos.data.data[0].nombre;
            this.sku = datos.data.data[0].sku;
            this.descripcion = datos.data.data[0].descripcion;
            /*currentObj.valor = datos.data.data[0].valor;
            currentObj.tienda_id = datos.data.data[0].tienda_id.nombre;*/
            
        },
        update() {
            let currentObj = this;

            let formData = new FormData();
            console.log(this.file1);
            formData.append('imagen', this.file1);
            formData.append("nombre",this.nombre);
            formData.append("sku",this.sku);
            formData.append("descripcion",this.descripcion);
            formData.append("valor",this.valor);
            formData.append("tienda_id",this.selected);
            this.axios.put('http://localhost:84/api/products', formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }}).then(function (response) {                
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

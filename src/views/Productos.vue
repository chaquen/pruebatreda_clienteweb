<template>
<div>
    <NavProductos></NavProductos>
    <br>
    <div class="row justify-content-md-center">
        <h4 class="col-6">Lista de Productos</h4>
        <br>
    </div>
    <br>
    <TablaProductos></TablaProductos>
</div>
</template>

<script>
import NavProductos from '../components/NavProductos.vue'
import TablaProductos from '../components/TablaProductos.vue'

export
default {
    name: 'About',
    components: {
        NavProductos,
        TablaProductos
    }
}
</script>

<template>
<div>
    <NavProductos></NavProductos>
    <br>
    <FormEliminarProducto></FormEliminarProducto>
</div>
</template>

<script>
import NavProductos from '../components/NavProductos.vue'
import FormEliminarProducto from '../components/FormEliminarProducto.vue'

export
default {
    name: 'About',
    components: {
        NavProductos,
        FormEliminarProducto
    }
}
</script>

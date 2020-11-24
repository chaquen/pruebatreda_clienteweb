<template>
<div>
    <NavProductos></NavProductos>
    <FormCrearProducto></FormCrearProducto>
</div>
</template>

<script>
import NavProductos from '../components/NavProductos.vue'
import FormCrearProducto from '../components/FormCrearProducto.vue'

export
default {
    name: 'About',
    components: {
        NavProductos,
        FormCrearProducto
    }
}
</script>

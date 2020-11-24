<template>
<div>
    <NavProductos></NavProductos>
    <FormEditarProducto></FormEditarProducto>
</div>
</template>

<script>
import NavProductos from '../components/NavProductos.vue'
import FormEditarProducto from '../components/FormEditarProducto.vue'

export
default {
    name: 'About',
    components: {
        NavProductos,
        FormEditarProducto
    }
}
</script>

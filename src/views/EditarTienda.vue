<template>
<div>
    <NavTienda></NavTienda>
    <FormEditarTienda></FormEditarTienda>
</div>
</template>

<script>
import NavTienda from '../components/NavTienda.vue'
import FormEditarTienda from '../components/FormEditarTienda.vue'

export
default {
    name: 'About',
    components: {
        NavTienda,
        FormEditarTienda
    }
}
</script>

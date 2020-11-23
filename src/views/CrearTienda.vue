<template>
<div>
    <NavTienda></NavTienda>
    <FormCrearTienda></FormCrearTienda>
</div>
</template>

<script>
import NavTienda from '../components/NavTienda.vue'
import FormCrearTienda from '../components/FormCrearTienda.vue'

export
default {
    name: 'About',
    components: {
        NavTienda,
        FormCrearTienda
    }
}
</script>

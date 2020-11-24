<template>
<div>
    <NavTienda></NavTienda>
    <br>
    <FormEliminarTienda></FormEliminarTienda>
</div>
</template>

<script>
import NavTienda from '../components/NavTienda.vue'
import FormEliminarTienda from '../components/FormEliminarTienda.vue'

export
default {
    name: 'About',
    components: {
        NavTienda,
        FormEliminarTienda
    }
}
</script>

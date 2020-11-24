<template>
<div>
    <NavTienda></NavTienda>
    <div class="row justify-content-md-center">
        <h4 class="col-6">Tiendas</h4>
        <br>
    </div>
    <br>
    <TablaTiendas></TablaTiendas>
</div>
</template>

<script>
import NavTienda from '../components/NavTienda.vue'
import TablaTiendas from '../components/TablaTiendas.vue'

export
default {
    name: 'About',
    components: {
        NavTienda,
        TablaTiendas
    }

}
</script>

<template>
<div class="container">
    <div class="row justify-content-md-center">
        <b-card-header header-tag="nav">
            <b-nav tabs justified>
                <b-nav-item :to="{name: 'Tiendas'}">Ver Tiendas</b-nav-item>
                <b-nav-item :to="{name: 'CrearTienda'}">Crear Tienda</b-nav-item>
                <b-nav-item :to="{name: 'EditarTienda'}">Editar Tienda</b-nav-item>
                <b-nav-item :to="{name: 'EliminarTienda'}">Eliminar Tienda</b-nav-item>
            </b-nav>
         </b-card-header>
    </div>
</div>
</template>

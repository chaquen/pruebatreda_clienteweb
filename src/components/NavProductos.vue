<template>
<div class="container">
    <div class="row justify-content-md-center">
        <b-card-header header-tag="nav">
            <b-nav tabs>
                <b-nav-item :to="{name: 'Productos'}">Ver Productos</b-nav-item>
                <b-nav-item :to="{name: 'CrearProducto'}">Crear Producto</b-nav-item>
                <b-nav-item :to="{name: 'EditarProducto'}">Editar Producto</b-nav-item>
                <b-nav-item :to="{name: 'EliminarProducto'}">Eliminar Producto</b-nav-item>
            </b-nav>
        </b-card-header>
    </div>
</div>
</template>

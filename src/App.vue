<template>
<div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-container>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand>Prueba PHP CRUD (Laravel 8 + vue 3)</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item :to="{name: 'Tiendas'}">Tiendas</b-nav-item>
                    <b-nav-item :to="{name: 'Productos'}">Productos</b-nav-item>                    
                    <b-nav-item :to="{name: 'Registro'}">Registro</b-nav-item>                    
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
    <router-view />
</div>
</template>

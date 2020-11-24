<template>
<div>
    <NavUser></NavUser>
    <FormRegister></FormRegister>
</div>
</template>

<script>
import NavUser from '../components/NavUser.vue'
import FormRegister from '../components/FormRegister.vue'

export default {
    name: 'About',
    components: {
        NavUser,
        FormRegister
    }
}
</script>

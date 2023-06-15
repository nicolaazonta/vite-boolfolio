<script>

export default {
    name: 'AppHeader',
}
</script>

<template>
    
    <header class="d-flex justify-content-end">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <router-link class="nav-link text-white p-2" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
            <router-link class="nav-link text-white p-2" :to="{ 'name': 'projects' }" >projects</router-link>
        </nav>
    </header>

</template>


<style lang="scss" scoped></style>
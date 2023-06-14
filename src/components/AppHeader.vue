<script>

export default {
    name: 'AppHeader',
}
</script>

<template>
    
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <router-link class="nav-link text-white" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
            <router-link class="nav-link text-white" :to="{ 'name': 'projects' }" >projects</router-link>
        </nav>

</template>


<style lang="scss" scoped></style>
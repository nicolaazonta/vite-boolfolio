<script>

export default {
    name: 'AppHeader',
}
</script>

<template>
    
    <nav class="navbar navbar-expand navbar-dark bg-dark justify-content-center">
        <div class="nav navbar-nav text-uppercase fw-bolder">
            <router-link class="nav-link nav-item text-white p-3" :to="{ 'name': 'home' }" aria-current="page">home</router-link>
            <router-link class="nav-link nav-item text-white p-3" :to="{ 'name': 'projects' }" >projects</router-link>
            <router-link class="nav-link nav-item text-white p-3" :to="{ 'name': 'contacts' }" >contacts</router-link>
        </div>
    </nav>

</template>


<style lang="scss" scoped></style>
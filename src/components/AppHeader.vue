<script>

export default {
    name: 'AppHeader',
}
</script>

<template>
    
    <header class="navbar navbar-expand justify-content-center position-sticky top-0 start-0 z-3">
        <div class="nav navbar-nav text-uppercase fw-bolder">
            <router-link class="nav-link nav-item text-white p-3" class-active="text_color" :to="{ 'name': 'home' }" >home</router-link>
            <router-link class="nav-link nav-item text-white p-3" class-active="text_color" :to="{ 'name': 'projects' }" >projects</router-link>
            <router-link class="nav-link nav-item text-white p-3" class-active="text_color" :to="{ 'name': 'contacts' }" >contacts</router-link>
        </div>
    </header>

</template>


<style lang="scss" scoped></style>
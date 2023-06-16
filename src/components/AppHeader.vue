<script>

export default {
    name: 'AppHeader',
}
</script>

<template >
    <header class="">
        <div class="d-flex align-items-center justify-content-between container w-75">

            <router-link class="logo_link" class-active="text_color"
                        :to="{ 'name': 'home' }">
                        <img src="../../public/img/logos/chocolate-bar.svg" alt="">
                    </router-link>


            <div class="navbar navbar-expand justify-content-center position-sticky top-0 start-0 z-3">
                <div class="nav navbar-nav text-uppercase fw-bolder ">
                    <router-link class="header_link nav-link nav-item text-white p-3" class-active="text_color"
                        :to="{ 'name': 'home' }">
                        home
                    </router-link>
                    <router-link class="header_link nav-link nav-item text-white p-3" class-active="text_color"
                        :to="{ 'name': 'projects' }">projects</router-link>
                    <router-link class="header_link nav-link nav-item text-white p-3" class-active="text_color"
                        :to="{ 'name': 'contacts' }">contacts</router-link>
                </div>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped></style>
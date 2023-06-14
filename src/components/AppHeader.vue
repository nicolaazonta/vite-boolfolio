<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        };
    }
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <router-link class="nav-link" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
            <router-link class="nav-link" :to="{ 'name': 'projects' }" aria-current="page">projects</router-link>
        </nav>

    </div>
</template>


<style lang="scss" scoped></style>
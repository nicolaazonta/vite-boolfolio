<script>
import { store } from './store';
import SiteMain from './components/SiteMain.vue'


export default {
    components: {
        SiteMain,
    },
    mounted(){
        store.fetchProjects('http://127.0.0.1:8000/api/projects');
    }
}
</script>

<template>
    <Appheader></Appheader>
    <router-view></router-view>
</template>

<style lang="scss">

</style>

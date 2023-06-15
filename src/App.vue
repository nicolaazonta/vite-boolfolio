<script>
import { store } from './store';
import  AppHeader  from './components/AppHeader.vue';


export default {
    components: {
        AppHeader,        
    },
    mounted(){
        store.fetchProjects('http://127.0.0.1:8000/api/projects');
        store.fetchSingleProject('http://127.0.0.1:8000/api/project')
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
</template>

<style lang="scss">

</style>

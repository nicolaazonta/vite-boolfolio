<script>
import { store } from './store';
import  AppHeader  from './components/AppHeader.vue';
import axios from "axios";

export default {
    components: {
        AppHeader,        
    },

    data(){
        return{
            store
        }
    },
    
    mounted(){
       /*  store.fetchProjects(this.base_api);
        store.fetchSingleProject(this.base_api + this.$route.params.slug) */
        /* store.fetchProjects(this.store.base_api); */
        /* store.fetchSingleProject(this.store.base_api+this.$route.params.slug); */

    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
</template>

<style lang="scss">

</style>

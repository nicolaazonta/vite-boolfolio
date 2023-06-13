<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
        HelloWorld,
    },
    mounted(){
        store.fetchProjects();
    }
}
</script>

<template>
    <SiteMain>
        
    </SiteMain>
</template>

<style lang="scss">

</style>

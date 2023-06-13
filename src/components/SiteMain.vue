<script>
import { store } from '../store'

export default {
    name: 'SiteMain',
    data(){
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container w-75">
        <h1 class="text-center"> SSA  SSSA  PPPROVA</h1>

        <div class="row">
            <div class="col-4" v-for="project in store.projects">
                <div class="card">
                    {{ project.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
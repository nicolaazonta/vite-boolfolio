<script>
import { store } from '../store'

export default {
    name: "ProjectInsideView",
    data() {
        return {
            store
        };
    },
}
</script>

<template>
    <div class="container w-75">
        <!-- <AppHeader/> -->
        <h1>projects view</h1>
        <h1 class="text-center"> SSA SSSA PPPROVA</h1>

        <div class="row">
            <ProjectCard />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
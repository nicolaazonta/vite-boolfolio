<script>
import { store } from '../store'

export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="col-4" v-for="project in store.projects">

        <div class="card">
            <div class="card-title">
                <h2>{{ project.name }}</h2>
            </div>
        </div>
    </div>
</template >


<style lang="scss" scoped></style>

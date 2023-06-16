<script>
import { store } from '../store'

export default {
    name: "NotFoundView",
    data() {
        return {
            store
        };
    },
}
</script>

<template>
    <div class="container w-50 text-center">
        <h1 class="text-uppercase">404 - page not found</h1>
        <h2>but don't worry tutte le strade portano a roma</h2>
    </div>
</template>

<style lang="scss" scoped></style>
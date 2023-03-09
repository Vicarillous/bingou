<template>
    <ul class="w-full bg-red-50">
        <list-group-item title="Gerar cartelas"/>
    </ul>
</template>

<script>
import {defineComponent} from "vue";
import ListGroupItem from "./list-group-item.vue";

export default defineComponent({
    components: {ListGroupItem}
})
</script>

<style scoped></style>

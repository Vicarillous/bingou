<template>
    <aside class="w-64 h-auto bg-neutral-800">
        <div>
            <h1 class="text-white">Bingou</h1>
        </div>
        <hr />
        <list-group>

        </list-group>
    </aside>
</template>

<script>
import {defineComponent} from "vue";
import ListGroup from "./list-group/list-group.vue";

export default defineComponent({
  components: {ListGroup}
})
</script>


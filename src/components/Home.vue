<template>
<div>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subtitle | lowerCase }}</p>
    <p>{{ subtitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>>
</div>
</template>

<script>
import CountNumber from "./CountNumber.vue"
import { tokyoNumber} from "@/tokyoNumber";

export default {
    mixins: [tokyoNumber],
    components: {
        CountNumber
    },
}
</script>
<template>
<div>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subtitle | lowerCase }}</p>
    <p>{{ subtitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
</div>
</template>

<script>
import { tokyoNumber} from "@/tokyoNumber";

export default {
    mixins: [tokyoNumber]
}
</script>
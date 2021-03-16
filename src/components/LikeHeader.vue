<template>
    <div>
        <slot><h2>デフォルトのタイトル</h2></slot>
        <p>{{headerText}}</p>
    </div>
</template>

<script>
export default {
    props: ["headerText"]
}
</script>


<style scoped>
h1 {
    color: blue;
}
</style>

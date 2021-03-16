<template>
    <div>
        <p>いいね（{{halfNumber}}）</p>
        <p>{{testProps}}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    props: {
        totalNumber: {
            type: Number,
            default: 0
            // required: true,
        },
        testProps: {
            type: String
        }
    },
    computed: {
        halfNumber(){
            return this.totalNumber / 2
        }
    },
    methods: {
        increment() {
            this.number++;
        }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid #ff0000;
    }
</style>
<template>
    <div>
        <slot></slot>
        <hr>
        <slot name="title" :foo="user"></slot>
        <hr>
        <slot name="number"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                firstName: 'Jack',
                lastName: 'K'
            }
        }
    }
}
</script>
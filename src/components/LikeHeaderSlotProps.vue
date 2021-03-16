<template>
    <div>
        <slot :foo="user"></slot>
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
<template>
<div>
    <p>About</p>
    <input type="text">
</div>    
</template>

<script>
export default {
    activated(){
        console.log("Activated")
    },
    deactivated(){
        console.log("Deactivated")
    }
}
</script>
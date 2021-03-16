<template>
<div>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subtitle | lowerCase }}</p>
    <p>{{ subtitle | lowerCase | upperCase }}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            title: "Welcome",
            subtitle: "TOKYO"
        }
    },
    filters: {
        lowerCase(value){
            return value.toLowerCase();
        }
    }
}
</script>
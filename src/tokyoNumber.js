export const tokyoNumber = {
    data(){
        return{
            title: "Welcome",
            subtitle: "TOKYO",
            number: 0
        }
    },
    filters: {
        lowerCase(value){
            return value.toLowerCase();
        }
    }
}
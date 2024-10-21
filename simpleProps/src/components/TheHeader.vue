<template>
    Hello
    <TheList :fatime="name"/>
</template>
<script>

import TheList from "@/components/TheList.vue"
export default{

    data(){
        return{
            name:"Fatya"
        }
    },
    components:{
        TheList
    }
}


</script>
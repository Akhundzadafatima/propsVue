<template>
    <div>
        {{ secondProps }}
    </div>
</template>
<script>

export default{
    props:{
        secondProps:{
            type:String,
            default:"heleki hecne yoxdu",
            Required:true
        }
    }
}
</script>
<template>
<ul>
        <li>Alma</li>
        <li>Armud</li>
        <li>Banan</li>
        <li>Gilas</li>
        <li>Ciyelek</li>
        <li>{{ fatime }}</li>
    </ul>
</template>
<script>


export default{
    props:{
        fatime:{
            type:String,
            default:""
        }
    }
}

</script>
















<!-- 
<template>
    <ul class="headerList">
        <li>Home</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>
            {{ Fatime }}
        </li>

        </ul>

   
</template>
<script>

export default{

components:{
},

props: {
    Fatime:{
        type: String,
        default:'heseennnn',
        Required:true

    }
  }


}
</script> -->
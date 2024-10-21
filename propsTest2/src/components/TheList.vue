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
</script>
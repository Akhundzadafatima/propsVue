<template>
    <ul class="headerList">
        <li>Home</li>
        <li>Contact</li>
        <li>Blog</li>
        <li style="margin-left: 2px;">
            {{ Fatime }}
        </li>

        <the-test :secondProps="Fatime"/>
    </ul>

   
</template>
<script>
import TheTest from './TheTest.vue';

export default{
// props:['Fatime']

components:{
    TheTest
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
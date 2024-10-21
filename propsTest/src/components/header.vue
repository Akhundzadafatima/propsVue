<template>
  <div class="header">
    <img
      class="logo"
      src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg"
      alt=""
    />
    <list  :Fatime="test"/>
    <input type="text" v-model="test">
  </div>
</template>

<script>
import list from "./TheList.vue";
export default {
  data(){
    return{
      test:"burdan gonderdim"
    }
  },
  components: {
    list,
  },
//   computed:{
//   fatime5vurma(){
//    return this.test*5
//   }, 
//   fatime5bolme(){
//    return this.test/5
//   }
// }
};

</script>

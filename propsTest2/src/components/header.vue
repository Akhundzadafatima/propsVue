<template>
  <div class="header">
    <img
      class="logo"
      src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg"
      alt=""
    />
    <list  :Fatime="fatime5vurma"/>
    <input type="text" v-model="number">
  </div>
</template> 

<script>
import list from "./TheList.vue";
export default {
  data(){
    return{
      number:null,
    }
  },
  components: {
    list,
  },
  computed:{
  fatime5vurma(){
   return this.number*5
  }, 
}
//   fatime5bolme(){
//    return this.test/5
//   }
// }
};

</script>

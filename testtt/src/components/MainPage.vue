<template>
    <div class="main">
  <div class="title">5-ə vurma və bölmə</div>
  <TheList  :bolme5="bol5" :vurma5="vur5" />
  <div class="inputs">
    <input type="text" v-model="inp" />
  </div>
</div>
</template>

<script>
import TheList from "@/components/TheList.vue";
export default {
  data() {
    return {
      inp: null,
    };
  },
  components: {
    TheList,
  },
  computed: {
    vur5() {
      return this.inp * 5;
    },
    bol5() {
      return this.inp/5;
    },
  },
};
</script>

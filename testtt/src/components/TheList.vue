<template>
<ul>
    <li>alma</li>
    <li>armud</li>
    <li>banan</li>
    <li>gilas</li>
    <li>ciyelek</li>
    <li>{{ vurma5 }}</li>
    <li>{{ bolme5 }}</li>
</ul>
</template>
<script>
export default{
    
    props: {
    vurma5: {
        default:0,
      type: Number,
      require: true,
    },
    bolme5: {
        default:0,
      type: Number,
      require: true,
    }
},
}
  </script>
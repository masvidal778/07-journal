<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FabNew",
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  },

})
</script>

<template>
<button class="btn btn-primary"
 @click="$emit('on:click')">
  <i class="fa fa-2x"
     :class="icon"
  ></i>
</button>
</template>

<style lang="scss" scoped>

button{
  border-radius: 100%;
  bottom: 30px;
  height: 60px;
  position: fixed;
  right: 30px;
  width: 60px;
}
</style>
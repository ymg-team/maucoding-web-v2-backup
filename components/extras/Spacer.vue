<template>
  <div class="spacer" :style="{ height: `${height}px` }"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 10,
    },
  },
}
</script>

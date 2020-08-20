<template>
  <div class="container">ready...</div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state
    },
  },
  mounted: () => {
    console.log('posts', this.$store)
  },
}
</script>

<style>
.container {
}
</style>

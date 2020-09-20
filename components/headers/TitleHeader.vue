<template>
  <div class="title-header">
    <div class="grid">
      <div class="col-12">
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.title-header {
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #303030;
    margin: 0;
  }
}
</style>

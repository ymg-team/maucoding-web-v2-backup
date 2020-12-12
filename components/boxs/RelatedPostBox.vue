<template>
  <div class="related-posts-box">
    <div class="grid">
      <div class="col-12 related-posts-box__title">
        <h2>Related Post</h2>
      </div>
      <div class="col-3" v-for="i in 4" :key="i">
        <LargeCardPost :hideSummary="true" />
      </div>
    </div>
  </div>
</template>

<script>
import LargeCardPost from '@/components/cards/LargePostCard'

export default {
  name: 'RelatePostBox',
  components: {
    LargeCardPost,
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/variables/colors.scss';

.related-posts-box {
  display: block;
  .related-posts-box__title {
    h2 {
      font-size: 24px;
      margin: 0 0 40px;
      border-bottom: 1px solid rgba(29, 55, 80, 0.2);
      padding-bottom: 30px;
    }
  }
}
</style>

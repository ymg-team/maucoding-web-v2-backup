<template>
  <div class="latest-post-box">
    <div class="grid">
      <div class="col-4">
        <LargeCardPost />
      </div>
      <div class="col-4">
        <LargeCardPost />
      </div>
      <div class="col-4">
        <LargeCardPost />
      </div>
    </div>
  </div>
</template>

<script>
import LargeCardPost from '@/components/cards/LargePostCard'

export default {
  components: {
    LargeCardPost,
  },
}
</script>

<style lang="scss">
.latest-post-box {
  display: block;
  .large-post-card {
    padding: 16px;
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
      background: #ffffff;
      box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.25);
    }
    .large-post-card__cover {
      height: 240px;
    }
    h2 {
      margin-bottom: 25px;
    }
    p {
      margin-bottom: 35px;
    }
  }
}
</style>

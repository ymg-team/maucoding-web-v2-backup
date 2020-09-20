<template>
  <div class="popular-posts">
    <div class="grid">
      <div class="col-4">
        <LargePostCard />
      </div>
      <div class="col-4">
        <SmallPostCard />
        <SmallPostCard />
        <SmallPostCard />
      </div>
      <div class="col-4">
        <LargePostCard />
      </div>
    </div>
  </div>
</template>

<script>
import LargePostCard from '@/components/cards/LargePostCard'
import SmallPostCard from '@/components/cards/SmallPostCard'

export default {
  components: {
    LargePostCard,
    SmallPostCard,
  },
}
</script>

<style scoped lang="scss">
.popular-posts {
  display: block;
}
</style>

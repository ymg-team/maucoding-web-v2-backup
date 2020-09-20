<template>
  <div class="latest-videos-box">
    <div class="grid">
      <div class="col-12">
        <LargeVideoCard />
      </div>
      <div class="col-6">
        <SmallVideoCard />
      </div>
      <div class="col-6">
        <SmallVideoCard />
      </div>
      <div class="col-6">
        <SmallVideoCard />
      </div>
      <div class="col-6">
        <SmallVideoCard />
      </div>
    </div>
  </div>
</template>

<script>
import LargeVideoCard from '@/components/cards/LargeVideoCard'
import SmallVideoCard from '@/components/cards/SmallVideoCard'

export default {
  components: {
    LargeVideoCard,
    SmallVideoCard,
  },
}
</script>

<style lang="scss" scoped>
.latest-videos-box {
  display: block;
}
</style>

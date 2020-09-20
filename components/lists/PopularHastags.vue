<template>
  <div class="popular-hashtags">
    <h2 class="popular-hashtags__title">Popular Hashtags</h2>
    <div class="popular-hashtags__links">
      <a href="/">Hastags 1</a>
      <a href="/">Hastags 2</a>
      <a href="/">Hastags 3</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularHashtags',
}
</script>

<style lang="scss" scoped>
.popular-hashtags {
  .popular-hashtags__title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin-top: 0;
    margin-bottom: 16px;
  }
}
.popular-hashtags__links {
  a {
    display: block;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #000000;
  }
}
</style>

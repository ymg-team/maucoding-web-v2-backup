<template>
  <div class="popular-hashtags">
    <h2 class="popular-hashtags__title">Popular Hashtags</h2>
    <div class="popular-hashtags__links">
      <a href="/">Hastags 1</a>
      <a href="/">Hastags 2</a>
      <a href="/">Hastags 3</a>
      <a href="/">Long Hastags</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularHashtags',
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables/colors.scss';

.popular-hashtags {
  .popular-hashtags__title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 45px;
  }
}
.popular-hashtags__links {
  background-color: $purple-soft-color;
  border-radius: 10px;
  padding: 30px 30px 0;
  text-align: center;
  a {
    display: inline-block;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-decoration-line: underline;
    margin-right: 25px;
    text-decoration: underline !important;
  }
}
</style>

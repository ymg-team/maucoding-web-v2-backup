<template>
  <div class="error-wrapper">
    <h1>404: PAGE NOT FOUND</h1>
    <div>
      <a href="/">Kembali ke Mau Coding</a>
      <span class="spacer">|</span><a href="/posts">Posts</a>
      <span class="spacer">|</span><a href="/videos">Videos</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables/colors.scss';

/* style helpers */
.error-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: $purple-main-color;
  color: $white-main-color;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 50px;
    margin: 0 0 10px;
  }
  a {
    color: $white-main-color;
    text-decoration: none;
  }
  .spacer {
    padding: 0 8px;
    text-align: center;
  }
}
</style>

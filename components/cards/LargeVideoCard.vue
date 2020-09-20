<template>
  <div
    class="large-video-card"
    style="background-image: url('/images/dummies/post-cover.png');"
  >
    <a href="#">
      <img
        class="large-video-card__play"
        src="/images/icons/video-play.svg"
        alt="video play icon"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.large-video-card {
  display: block;
  height: 379px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  img.large-video-card__play {
    width: 132.5px;
    height: 132.5px;
  }
}
</style>

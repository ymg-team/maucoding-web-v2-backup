<template>
  <div class="large-video-card">
    <div
      class="large-video-card__cover"
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
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/variables/colors.scss';

.large-video-card {
  padding: 30px;
  display: block;
  background-color: $purple-soft-color;
  margin-bottom: 40px;
  border-radius: 10px;
  .large-video-card__cover {
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 379px;
    border-radius: 10px;
  }
  img.large-video-card__play {
    width: 108px;
    height: 108px;
  }
}
</style>

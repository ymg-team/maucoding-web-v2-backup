<template>
  <div class="small-video-card">
    <div
      class="small-video-card__cover"
      style="background-image: url('/images/dummies/post-cover.png');"
    >
      <a href="#">
        <img
          class="small-video-card__play"
          src="/images/icons/video-play.svg"
          alt="video play icon"
        />
      </a>
    </div>
    <div class="small-video-card__text">
      <h2>Membuat Map Kombinasi Leaflet dan Open Street Map - OSM Part 1</h2>
      <div class="small-video-card__text__meta">Di Posting 7 Juni 2020</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.small-video-card {
  margin-bottom: 82px;
  .small-video-card__cover {
    display: block;
    height: 235px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img.small-video-card__play {
      width: 100px;
      height: 100px;
    }
  }
  .small-video-card__text {
    padding: 25px;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 103.41%;
    }
    .small-video-card__text__meta {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #777777;
    }
  }
}
</style>

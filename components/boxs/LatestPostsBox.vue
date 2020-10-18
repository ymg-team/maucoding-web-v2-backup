<template>
  <div class="latest-post-box">
    <div class="grid">
      <vue-glide :bullet="true">
        <vue-glide-slide v-for="i in 10" :key="i">
          <div class="col-4">
            <LargeCardPost />
          </div>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
// ref: https://antonreshetov.github.io/vue-glide/
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import LargeCardPost from '@/components/cards/LargePostCard'

export default {
  components: {
    LargeCardPost,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  methods: {},
}
</script>

<style lang="scss">
@import '../../styles/variables/colors.scss';

.latest-post-box {
  display: block;
  [class*='col-'],
  [class*='col_'],
  [class~='col'] {
    padding: 10px;
  }
  .large-post-card {
    padding: 14px;
    transition: all 0.3s ease;
    background-color: $purple-soft-color;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.25);
    }
    .large-post-card__cover {
      height: 240px;
    }
    h2 {
      margin-bottom: 25px;
      line-height: 25px;
      font-size: 18px;
    }
    p {
      margin-bottom: 35px;
      font-size: 14px;
    }
  }
}

.glide {
  .glide__bullets {
    text-align: center;
    .glide__bullet {
      background: #cbcbcb;
      border-radius: 10px;
      transform: matrix(1, 0, 0, -1, 0, 0);
      border: none;
      padding: 4px;
      width: 26px;
      margin-right: 12.31px;
      outline: none;
      cursor: pointer;
      &.glide__bullet--active {
        background: #7e7e7e;
        width: 40px;
      }
    }
  }
}
</style>

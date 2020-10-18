<template>
  <nuxt-link
    to="/post/Membuat-Dashboard-Dengan-Python-Dash-5e0067ca6857eb1948ae82bb"
  >
    <div class="small-post-card">
      <div
        class="small-post-card__cover"
        :style="{ backgroundImage: `url(${data.cover})` }"
      ></div>
      <div class="small-post-card__right">
        <h2>{{ data.title }}</h2>
        <div class="author">
          <a href="/">Yussan</a>
          <br />
          <span class="author__created-on">5 Agustus 2020</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          cover: '/images/dummies/post-cover.png',
          title: 'Membuat Dashboard Dengan Python Dash',
          intro: `Pada tutorial kali ini, kita akan membahas salah satu framework 
                  python yang sangat membantu dalam membangun sebuah dashboard`,
          author: {
            username: 'yussan',
          },
          created_on: 1600572991,
        }
      },
    },
  },
}
</script>

<style lang="scss">
@import '../../styles/variables/colors.scss';

.small-post-card {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 20px;
  background-color: $purple-soft-color;
  border-radius: 10px;
  .small-post-card__cover {
    width: 115px;
    height: 97px;
    background-size: cover;
    background-position: center;
    flex: none;
    border-radius: 10px;
  }
  .small-post-card__right {
    margin: 0 0 0 15px;
    h2 {
      margin: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 20px;
    }
    .author {
      margin-top: 10px;
      line-height: 1;
      a {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-decoration: none;
      }
      .author__created-on {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #777777;
      }
    }
  }
}
</style>

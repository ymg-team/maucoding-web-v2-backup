<template>
  <NuxtLink
    to="/posts/Membuat-Dashboard-Dengan-Python-Dash-5e0067ca6857eb1948ae82bb"
  >
    <div class="large-post-card">
      <div
        class="large-post-card__cover"
        :style="{ backgroundImage: `url(${data.cover})` }"
      ></div>
      <h2>{{ data.title }}</h2>
      <p>{{ data.intro }}</p>
      <div class="author">
        <a href="/">Yussan</a>
        <br />
        <span class="author__created-on">5 Agustus 2020</span>
      </div>
    </div>
  </NuxtLink>
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
a {
  text-decoration: none !important;
}

.large-post-card {
  padding: 30px;
  background-color: $purple-soft-color;
  border-radius: 10px;
  .large-post-card__cover {
    background-size: cover;
    background-position: center;
    height: 139px;
    width: 100%;
    border-radius: 10px;
  }
  h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 25px;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
  }
  .author {
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
</style>

<template>
  <header class="header">
    <div class="container">
      <div class="grid-noGutter">
        <div class="col-4 header__header-logo">
          <NuxtLink to="/">
            <img
              src="/images/logos/mcdg-logo-qulub.png"
              alt="Mau Coding Logo"
            />
            <span class="header__header-tagline">
              Mau Coding <br />
              Tech from Engineer's Perspective
            </span>
          </NuxtLink>
        </div>
        <div class="col-8 header__header-links">
          <ul>
            <li v-for="n in Menus" :key="n.link">
              <NuxtLink
                :to="n.to"
                :class="`${pathArr[1] == n.key ? 'active' : ''}`"
              >
                {{ n.text }}
              </NuxtLink>
            </li>
            <li style="width: 70px;" class="header__header-links__search-icon">
              <a href="#">
                <img src="/images/icons/magnify 2.png" alt="magnify icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '../../styles/variables/colors.scss';

header.header {
  background-color: $purple-soft-color;
  padding: 25px 0;
  .header__header-logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      img {
        height: 56px;
        width: 60px;
        margin-right: 20px;
        border-radius: 10px;
      }
      .header__header-tagline {
        color: #a537fd;
        font-size: 12px;
        line-height: 16px;
        font-weight: bold;
      }
    }
  }
  .header__header-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ul {
      margin-top: 4px;
      li {
        display: inline-block;
        a {
          padding: 0 5px 6px;
          margin-left: 30px;
          font-size: 14px;
          font-style: normal;
          font-weight: bold;
          line-height: 19px;
          text-decoration: none;
          color: #303030;
          &.active {
            border-bottom: 3px solid #a537fd;
          }
        }
      }
      .header__header-links__search-icon {
        img {
          position: absolute;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>

<script>
const Menus = [
  {
    to: '/posts',
    text: 'Posts',
    key: 'posts',
  },
  {
    to: '/videos',
    text: 'Videos',
    key: 'videos',
  },
  {
    to: '/about',
    text: 'About',
    key: 'about',
  },
]

export default {
  name: 'Header',
  data() {
    const pathArr = this.$nuxt.$route.path.split('/')
    return {
      Menus,
      pathArr,
    }
  },
}
</script>

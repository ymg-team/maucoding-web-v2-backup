<template>
  <header class="header">
    <div class="container">
      <div class="grid-noGutter">
        <div class="col-4 header__header-logo">
          <nuxt-link to="/">
            <img
              src="/images/logos/mcdg-logo-qulub.png"
              alt="Mau Coding Logo"
            />
            <span class="header__header-tagline">
              Mau Coding <br />
              Tech from Engineer's Perspective
            </span>
          </nuxt-link>
        </div>
        <div class="col-8 header__header-links">
          <ul>
            <li>
              <nuxt-link to="/posts" class="active">POSTS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/videos">VIDEOS</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">ABOUT</nuxt-link>
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

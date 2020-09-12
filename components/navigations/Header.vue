<template>
  <header class="header">
    <div class="grid">
      <div class="col-3 header__header-logo">
        <nuxt-link to="/">
          <img
            src="/images/logos/android-icon-96x96.png"
            alt="Mau Coding Logo"
          />
        </nuxt-link>
      </div>
      <div class="col-9 header__header-links">
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
          <li class="header__header-links__search-icon">
            <a href="#">
              <img src="/images/icons/magnify 2.png" alt="magnify icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header.header {
  padding: 10px;
  .header__header-logo {
    img {
      height: 77px;
      width: 77px;
    }
  }
  .header__header-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ul {
      li {
        display: inline-block;
        a {
          padding: 0 5px 6px;
          margin-left: 55px;
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
          top: 35px;
        }
      }
    }
  }
}
</style>

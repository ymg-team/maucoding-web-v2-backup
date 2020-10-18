<template>
  <footer class="footer">
    <div class="container">
      <div class="grid">
        <div class="col-4">
          <img
            class="footer__logo"
            src="/images/logos/MCDG logo.svg"
            alt="Mau Coding Logo"
          />
          <div class="footer__socmeds">
            <a href="https://twitter.com/maugowes">
              <img src="/images/icons/twitter-icon.svg" alt="Twitter Logo" />
            </a>
            <a href="https://instagram.com/maugowes">
              <img
                src="/images/icons/instagram-icon.svg"
                alt="Instagram Logo"
              />
            </a>
            <a href="https://facebook.com/maugowes">
              <img src="/images/icons/facebook-icon.svg" alt="Facebook Logo" />
            </a>
          </div>
          <div class="footer__copyright">
            © 2020 Copyright Mau Coding
          </div>
        </div>
        <div class="col-4 footer__links">
          <ul class="footer__links__menus">
            <li v-for="n in MENU_LINKS" :key="n.link">
              <a :href="n.link">{{ n.text }} </a>
            </li>
          </ul>
        </div>
        <div class="col-4 footer__links">
          <ul class="footer__links__contacts">
            <li v-for="n in MENU_CONTACTS" :key="n.link">
              <a :href="n.link">
                <img :src="n.icon" :alt="n.text" />
                <span class="text">{{ n.text }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid">
        <div class="col-12">
          <div class="footer__border-bottom"></div>
          <div class="footer__powered-by">
            Powered by Yussan Media Group
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
const MENU_LINKS = [
  {
    link: '/about',
    text: 'About Mau Coding',
  },
  {
    link: '/static/terms-conditions',
    text: 'Terms and Conditions',
  },
  {
    link: '/static/privacy-policy',
    text: 'Privacy Policy',
  },
  {
    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSeByAgx7GNG3YyH3vgAupKymlwfJ6mNNaGCQN0ZkG1KC8636A/viewform',
    target: '_blank',
    text: 'Contact Us',
  },
]

const MENU_CONTACTS = [
  {
    icon: '/images/icons/map-marker.png',
    text: 'D.I. Yogyakarta, Indonesia',
  },
  {
    icon: '/images/icons/email-outline.png',
    text: 'info@maucoding.com',
  },
  {
    icon: '/images/icons/phone.png',
    text: 'Whatsapp: +62 851-5693-4428',
  },
]

export default {
  data: () => {
    return {
      MENU_LINKS,
      MENU_CONTACTS,
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #a537fd;
  color: #ffffff;
  font-size: 18px;
  line-height: 25px;
  .footer__logo {
    width: 233px;
  }
  .footer__socmeds {
    width: calc(233px - 22px);
    display: flex;
    justify-content: space-between;
    padding: 0 11px 26.93px 11px;
  }
  .footer__copyright {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }
  .footer__border-bottom {
    background-color: #ffffff;
    height: 4.09px;
    width: 873px;
    margin: 41.65px auto auto auto;
  }
  .footer__powered-by {
    padding: 24.56px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
  .footer__links {
    padding-top: 100px;
    a {
      color: #ffffff;
      text-decoration: none;
      font-weight: 500;
    }
    ul {
      margin: 0;
      list-style: none;
      li {
        margin-bottom: 30px;
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
    .footer__links__contacts {
      li {
        a {
          position: relative;
          img {
            position: absolute;
            height: 32px;
            top: -2px;
          }
          .text {
            padding-left: 40px;
          }
        }
      }
    }
  }
}
</style>

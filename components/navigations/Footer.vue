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
        <div class="col-4">
          ...
        </div>
        <div class="col-4">
          ...
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
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #a537fd;
  color: #ffffff;
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
}
</style>

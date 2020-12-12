<template>
  <div class="post-detail">
    <Header />
    <!-- article content -->
    <main class="container">
      <div class="grid-center">
        <div class="col-9">
          <h1>This Is Content Title</h1>

          <!-- article meta -->
          <div class="post-detail__meta">
            <!-- left -->
            <div class="post-detail__meta__left">
              <img
                :src="post.author.avatar"
                class="post-detail__meta__avatar"
                alt="author avatar"
              />
              <span class="post-detail__meta__author">
                Elsa Jean
              </span>
              <span class="post-detail__meta__date" style="margin-right: 16px;">
                18 Januari 2020
              </span>
              <span class="post-detail__meta__date" style="margin-right: 16px;">
                &bull;
              </span>
              <span class="post-detail__meta__date">
                10 Menit Baca
              </span>
            </div>
            <!-- end of left -->
            <!-- right -->
            <div class="post-detail__meta__right">
              <div class="post-detail__meta__share">
                <a class="post-detail__meta__share__item" href="#">
                  <img
                    src="/images/icons/icon-share-twitter.svg"
                    alt="Share Twitter"
                  />
                </a>
                <a class="post-detail__meta__share__item" href="#">
                  <img
                    src="/images/icons/icon-share-linkedin.svg"
                    alt="Share Linkedin"
                  />
                </a>
                <a class="post-detail__meta__share__item" href="#">
                  <img
                    src="/images/icons/icon-share-instagram.svg"
                    alt="Share Instagram"
                  />
                </a>
                <a class="post-detail__meta__share__item" href="#">
                  <img
                    src="/images/icons/icon-share-facebook.svg"
                    alt="Share Facebook"
                  />
                </a>
              </div>
            </div>
            <!-- end of right -->
          </div>
          <!-- end of article meta -->

          <!-- article -->
          <article>
            <!-- <p> -->
            <img
              src="/images/dummies/post-cover.jpg"
              class="post_detail__cover"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sagittis est id blandit pretium. Praesent fermentum, nisi et
              tempus semper, ex mauris viverra metus, quis bibendum lorem justo
              non nulla. Maecenas sed ex a ex viverra commodo eu nec leo. Donec
              eleifend, nibh nec pharetra consequat, odio nulla vulputate urna,
              id ultrices nisi lectus non augue.
            </p>

            <h2>This Is Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sagittis est id blandit pretium. Praesent fermentum, nisi et
              tempus semper, ex mauris viverra metus, quis bibendum lorem justo
              non nulla. Maecenas sed ex a ex viverra commodo eu nec leo. Donec
              eleifend, nibh nec pharetra consequat, odio nulla vulputate urna,
              id ultrices nisi lectus non augue.
              <br />
              <img src="/images/dummies/post-cover.jpg" />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sagittis est id blandit pretium. Praesent fermentum, nisi et
              tempus semper, ex mauris viverra metus, quis bibendum lorem justo
              non nulla. Maecenas sed ex a ex viverra commodo eu nec leo. Donec
              eleifend, nibh nec pharetra consequat, odio nulla vulputate urna,
              id ultrices nisi lectus non augue.
            </p>
            <!-- </p> -->
          </article>
          <!-- article -->
        </div>
      </div>

      <RelatedPostBox />
    </main>
    <!-- end of article content -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue'
import Footer from '@/components/navigations/Footer.vue'
import RelatedPostBox from '@/components/boxs/RelatedPostBox'

const DUMMY_AVATAR =
  'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-19/s320x320/104635686_955309551588666_8024415994302615722_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=1&_nc_ohc=UQTC_OPvVNIAX8fk_oA&tp=1&oh=93cf34e257825d7af0a1f46954db4f16&oe=5FFEB14E'

export default {
  data() {
    return {
      post: {
        author: {
          avatar: DUMMY_AVATAR,
        },
      },
    }
  },
  components: {
    Header,
    Footer,
    RelatedPostBox,
  },
  asyncData({ params }) {
    const { slug } = params // When calling /abc the slug will be "abc"
    return { slug }
  },
  head() {
    return {
      title: 'Posts - Mau Coding',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Temukan postingan menarik seputar dunia tech engineering di Mau Coding',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables/colors.scss';

.post-detail {
  main {
    margin: 100px auto;
    h1 {
      font-size: 36px;
      margin-bottom: 50px;
    }
    .post-detail__meta {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-between;
      letter-spacing: 0.5ps;
      .post-detail__meta__left,
      .post-detail__meta__right {
        display: inline-flex;
        align-items: center;
      }
      .post-detail__meta__left {
        width: 50%;
        img.post-detail__meta__avatar {
          width: 32px;
          height: 32px;
          border-radius: 32px;
          margin-right: 15px;
        }
        .post-detail__meta__author {
          margin-right: 15px;
          font-weight: 600;
        }
        .post-detail__meta__date {
          font-weight: 500;
          color: $dark-soft-color;
        }
      }
      .post-detail__meta__right {
        .post-detail__meta__share__item {
          margin-left: 30px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    article {
      line-height: 1.8;
      margin-bottom: 100px;
      p {
        margin: 0;
      }

      img.post_detail__cover {
        margin: 80px 0 60px;
      }

      img {
        max-width: 100%;
        margin: 60px 0;
      }
    }
  }
}
</style>

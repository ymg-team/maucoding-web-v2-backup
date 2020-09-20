<template>
  <div>
    <div class="container">
      <Header />
      <Spacer height="58" />
      <PopularPosts />
      <Spacer height="50" />
      <BtnMoreFull />
      <Spacer height="50" />
      <TitleHeader title="Latest Posts" />
      <Spacer height="35" />
      <LatestPosts />
      <Spacer height="50" />
      ...
      <Spacer height="102.61" />
      <TitleHeader title="Latest Videos" />
      <Spacer height="30" />
      <div class="grid">
        <div class="col-9">
          <LatestVideos />
        </div>
        <div data-push-left="off-1" class="col-2">
          <PopularHashtags />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue'
import PopularPosts from '@/components/boxs/PopularPostsBox.vue'
import LatestPosts from '@/components/boxs/LatestPostsBox'
import LatestVideos from '@/components/boxs/LatestVideosBox'
import Spacer from '@/components/extras/Spacer.vue'
import BtnMoreFull from '@/components/navigations/FullButtonMore.vue'
import TitleHeader from '@/components/headers/TitleHeader.vue'
import PopularHashtags from '@/components/lists/PopularHastags.vue'
import Footer from '@/components/navigations/Footer.vue'

export default {
  components: {
    Header,
    PopularPosts,
    Spacer,
    BtnMoreFull,
    TitleHeader,
    LatestPosts,
    LatestVideos,
    PopularHashtags,
    Footer,
  },
  computed: {
    posts() {
      return this.$store.state
    },
  },
  mounted() {
    console.log('posts', this.$store.state)
  },
  head() {
    return {
      title: "Mau Coding - Tech From Engineer's Perspective",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Mau Coding mengajak kamu untuk lebih mengenal dunia teknologi dari perspektif engineer',
        },
      ],
    }
  },
}
</script>

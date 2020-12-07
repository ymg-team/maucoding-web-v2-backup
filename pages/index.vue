<template>
  <div>
    <Header />
    <div class="container">
      <Spacer :height="58" />
      <TitleHeader title="Popular Posts" />
      <Spacer :height="35" />
      <PopularPosts />
      <Spacer :height="50" />
      <BtnMoreFull />
      <Spacer :height="50" />
      <TitleHeader title="Latest Posts" />
      <Spacer :height="20" />
      <LatestPosts />
      <Spacer :height="100" />
      <div class="grid">
        <div class="col-8">
          <LatestVideos />
        </div>
        <div class="col-4">
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
  data() {
    return {}
  },
  computed: {
    posts() {
      return this.$store.state
    },
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

<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue'

export default {
  components: {
    Header,
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

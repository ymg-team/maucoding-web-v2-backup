<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from '@/components/navigations/Header.vue'

export default {
  components: {
    Header,
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

<style>
.container {
}
</style>

<template>
  <div class="container">
    this is posts page: {{ this.slug }}
    <NuxtLink to="/">Back to home</NuxtLink>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const { slug } = params // When calling /abc the slug will be "abc"
    return { slug }
  },
  // data() {
  //   return {
  //     s: slug,
  //   }
  // },
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

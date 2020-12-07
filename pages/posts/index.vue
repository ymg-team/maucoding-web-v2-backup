<template>
  <div>
    <Header />
    <Spacer :height="100" />
    this is post list
  </div>
</template>

<script>
import Header from '@/components/navigations/Header'
import Spacer from '@/components/extras/Spacer'

export default {
  components: {
    Header,
    Spacer,
  },
  name: 'postDetailPage',
}
</script>

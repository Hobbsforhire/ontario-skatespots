<template>
  <section class="container">
    
    <img :src="skatepark.photo_url" />
    
    <h1 class="title">{{ skatepark.name }} Skatepark</h1>
    
    <h2 class="info">{{ skatepark.name }}</h2>

    <nuxt-link class="button" to="/">
      Skateparks
    </nuxt-link>
    <a class="button" :href="skatepark.gmap_url" target="_blank">Directions</a>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/skateparks/' + params.id)
      .then((res) => {
        console.log(res)
        return { skatepark: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'error' })
      })
  },
  head () {
    return {
      title: `Skateparks: `
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-top 30px

.info
  font-weight 300
  color #9aabb1
  margin 0
  margin 10px auto 20px

.button
  margin-top 30px
  &:last-child
    margin-left 1rem
</style>

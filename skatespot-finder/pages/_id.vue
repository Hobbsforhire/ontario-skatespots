<template>
  <section class="container">
    
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    
    <h1 class="title">{{ skatepark.name }} Skatepark</h1>
    
    <h2 class="info">{{ skatepark.name }}</h2>
    
    <img :src="skatepark.photo_url" />

    <nuxt-link class="button" to="/">
      Skateparks
    </nuxt-link>
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

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin: 10px auto 20px;
}
.button
{
  margin-top: 30px;
}
img { 
  display: block; 
  margin: 0 auto; 
}

</style>

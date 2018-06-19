<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Locations
    </h1>
    <button v-on:click='isOpen =!isOpen'>Toggle List</button>
    <ul class="skateparks">
      <li v-for="(skatepark, index) in skateparks" :key="index" class="skatepark">
        <img v-show="isOpen" :src="skatepark.thumbnail_url" />
        <nuxt-link :to="{ name: 'id', params: { id: skatepark.name }}">
          {{ skatepark.name }}  
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      isOpen: false
    }
  },
  async asyncData () {
    let { data } = await axios.get('/api/skateparks')
    return { skateparks: data }
  },
  head () {
    return {
      title: 'skateparks'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.skateparks
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.skatepark
{
  margin: 20px 0;
}
</style>

<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li class="nav__item" v-for="(skatepark, index) in skateparks" :key="index" data-scroll-to>
        <nuxt-link :to="{ name: 'id', params: { id: skatepark.name }}" class="nav__link">
          <img class="media__img" :src="skatepark.thumbnail_url" />
          <span class="skatepark-name media__content">{{ skatepark.name }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      skateparks: null
    }
  },
  mounted () {
    axios
      .get('/api/skateparks')
      .then(response => (this.skateparks = response.data))
  }

}
</script>

<style lang="stylus" scoped>
  .nav
    grid-column 1 / 2
    overflow-y scroll
    border-right solid 1px rgba(255, 255, 255, 0.1)
    border-bottom solid 1px rgba(255, 255, 255, 0.1)
    .nav__menu 
      list-style-type none 
      padding 0 
      margin 0 
      .nav__item
        display flex
        transition all 0.1s ease
        &:hover 
          cursor pointer
          filter brightness(110%)
          background-color rgba(255, 255, 255, 0.035)
        &:not(:last-child)
          border-bottom solid 1px rgba(255, 255, 255, 0.1)
        .nav__link 
          display flex 
          width 100%
          align-items center
          padding 2rem
          color #fff
          font-weight 200
          text-decoration none
          .media__img 
            width 60px 
            height 60px
            margin-left 0
            margin-right 1rem 
            border-radius 0.25rem
            object-position center center 
            object-fit cover
          .media__content 
            margin 0
</style>

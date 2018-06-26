<template>
  <section class="container" v-bind:class="{ active: isActive }">
    <my-header />
    <my-nav />
    <button class="button toggle" v-on:click='makeActive'>Toggle List</button>
    <main class="main">
      <ul class="skateparks">
        <li class="skatepark" v-for="(skatepark, index) in skateparks" :key="index" data-section>
          <section class="section__header" :style="{ backgroundImage: 'url(' + skatepark.photo_url + ')' }">
            <h2 class="skatepark-name">{{ skatepark.name }}</h2>
          </section>
          <div class="section__content">
            <ul class="boxgrid">
              <li class="boxgrid__item">
                <div class="box weather">
                  <span class="text__large">27°C</span>
                  Cloudy
                </div>
              </li>
              <li class="boxgrid__item boxgrid__item--push">
                <a href="" class="">
                </a>
              </li>
              <li class="boxgrid__item boxgrid__item--wide">
                <nuxt-link :to="{ name: 'id', params: { id: skatepark.name }}" class="box box--image">
                  <img class="box__img" src="https://source.unsplash.com/600x400/?ontario" alt="">
                </nuxt-link>
              </li>
              <li class="boxgrid__item">
                <a href="#" class="box box--image directions">
                  <img class="box__img" src="~/assets/img/icons/directions-ab.svg" alt="">
                  Directions
                </a>
              </li>
              <li class="boxgrid__item">
                <a href="" class="">
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </main>
    <my-footer/>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'
import MyNav from '~/components/Nav.vue'

export default {
  components: {
    MyNav,
    MyHeader,
    MyFooter
  },
  data () {
    return {
      isActive: true
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
  },
  methods: {
    makeActive: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="stylus" scoped>
.button.toggle 
  display block 
  position fixed 
  top 14%
  left 86%
  transform translate(-50%, -50%) 
  z-index 100 

.skateparks
  list-style none
  margin 0
  padding 0

.skatepark
  margin 20px 0

.skatepark-name 
  display block
  margin-top 13px

.container 
  .nav,
  .header 
    display none 
  &.active 
    min-height 100vh
    height 100%
    overflow hidden
    color #fff 
    background-color #121519 

    font-family 'Montserrat', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif
    display grid 
    grid-template-rows 4rem 1fr 4rem 
    grid-template-columns 20% 1fr
    height 100vh
    .nav
      display block
    .header 
      display flex 
    .footer 
      display flex 
      align-items center
      grid-column 1 / -1
      padding 0 2rem
      border-top 1px solid rgba(255, 255, 255, 0.1)
    .main 
      grid-column 2 / -1
      padding 2rem 
      overflow-x hidden 
      overflow-y auto 
      perspective 1px 
      -webkit-overflow-scrolling touch
      -webkit-scroll-snap-type block proximity 
      -webkit-scroll-snap-destination 0% 100%
      -webkit-scroll-snap-points-y repeat(100%)
      .skatepark 
        min-height calc(100vh -4rem - 4rem)
        margin-bottom 250px
        padding-top 300px 
        position relative
        transform-style preserve-3d
        scroll-snap-align start
        .section__header 
          transform translateZ(-1px) scale(1.9)

          position absolute 
          top 50px 
          left 0 
          right 0 
          height 500px 
          padding 2rem 
          border-radius 0.5rem 
          background-size cover 
          background-repeat no-repeat 
          background-position center center 
          text-shadow 0 0 20px rgba(0, 0, 0, 1)
          .skatepark-name
            text-align left 
            font-weight 200
            font-size 3rem
          .skatepark-subtitle
            font-size 1.5rem 
            text-align left
        .section__content 
          padding 0
          transform translateZ(0)
          position relative 
          z-index 1
          .boxgrid 
            display grid 
            padding 0
            grid-template-columns repeat(auto-fit, minmax(150px, 1fr))
            grid-auto-rows minmax(150px, auto)
            grid-gap 2rem .5rem 
            .box  
              display flex 
              flex 1 0 0 
              position relative
              border-radius 0.5rem
              font-size 0.875rem 
              color #fff 
              box-shadow 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)
              transform scale(1)
              transition all 0.25s ease 
              filter brightness(100%)
              flex-direction column 
              justify-content center 
              will-change transform
              &.directions
                background white
                color #121519
                .box__img 
                  position relative
                  width 40%
                  height initial
              &.weather
                background-color #66AEE5
                text-decoration none
                font-weight 100
              &:hover 
                transform scale(1.07)
                filter brightness(110%)
                z-index 10
              .text__large
                font-size 2.25rem
              .box__img 
                display block
                height 100%
                width 100% 
                position absolute 
                object-fit cover 
                object-position center 
                border-radius 0.5rem 
            .boxgrid__item 
              display flex
            .boxgrid__item--wide 
              grid-column span 2
            .boxgrid__item--push
              grid-column span 2
              padding-left 50%
</style>

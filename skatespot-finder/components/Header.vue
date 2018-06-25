<template>
  <header class="header">
    <div class="header__left">
      <span>Ontario Skatespots</span>
    </div>
    <div class="header__right">
      <p>THU, 14  JUN | 16:20</p>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
  .header 
    display flex
    justify-content space-between 
    grid-column 1 / -1
    padding 0 2rem 
    border-bottom 1px solid rgba(255, 255, 255, 0.1)
    font-size .75rem 
    font-weight 200 
    text-transform uppercase 
    letter-spacing 1px 
    color #a0a0a0
    .header__left,
    .header__right
      display flex
      align-items center
</style>

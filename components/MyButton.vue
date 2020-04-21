<template lang="pug" functional>
  div
    .btn.button(@click="listeners.onClick") {{ props.text }}
</template>

<style lang="stylus" scoped>
  @import '~assets/styl/_button.styl'

    .btn
      @extends .main-btn
</style>

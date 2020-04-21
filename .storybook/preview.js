import Vue from 'vue'
import Vuex from 'vuex'
import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

addDecorator(withInfo)
addDecorator(withKnobs)

configure(function () {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}, module)

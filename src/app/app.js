import Vue from 'vue';
import $ from 'jquery';
import * as Utils  from './utils';
import en from 'vee-validate/dist/locale/en';
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);
Validator.localize('en', en);

import VuejsDialog from "vuejs-dialog" 
Vue.use(VuejsDialog)


import MainTop from '../vue/main.vue';


function application() {
    this.dbname = undefined;
};

var app = new application();



new Vue({
  el: '#app-main-top',
  components: {
    'app-main-top': MainTop
  }
});

export /*default*/ {app, Vue};

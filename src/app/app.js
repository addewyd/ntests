import Vue from 'vue';
import $ from 'jquery';
import * as Utils  from './utils';
import en from 'vee-validate/dist/locale/en';
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);
Validator.localize('en', en);

import VuejsDialog from "vuejs-dialog"
Vue.use(VuejsDialog)


import MainTopList from '../vue/main.vue';
import ModalWindow from '../vue/modal.vue';
import TypeMnqw from '../vue/typemnqw.vue';
import TypeHdrs from '../vue/typehdrs.vue';


function application() {
    this.dbname = undefined;
};

var app = new application();

application.prototype.init = async function() {
    var p = {
        init: 1
    };
    return new Promise((resolve, reject) => {

        $.ajax({url:'cntr/gwdata.php', type:'POST',data:p, dataType:'json'}).
        done(function(data){
            resolve(data);
        }).
        fail(function(e) {
            console.log('init - ajax error', e);
            reject(e);
        });
    });
}

Vue.component('modal-window', ModalWindow);
Vue.component('q-tmpl-type-mnqw', TypeMnqw);
Vue.component('q-tmpl-type-hdrs', TypeHdrs);



new Vue({
  el: '#app-main-top',
  components: {
    'app-main-top': MainTopList
  }
});

export /*default*/ {app, Vue};

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

application.prototype.save_tm = async function(type, data, fname, fdate, gender, dur, score) {
    var fn = Utils.escape_RegExp(fname);
    var fd = Utils.escape_RegExp(fdate);

    var p = {
        type: type,
        data: data,
        fname: fn,
        fdate: fd,
        gender: gender,
        dur: dur,
        score: score
    };
    return new Promise((resolve, reject) => {

        $.ajax({url:'cntr/gwdata.php', type:'POST',data:p, dataType:'json'}).
        done(function(data){
            resolve(data);
        }).
        fail(function(e) {
            console.log('save ajax error', e);
            reject(e);
        });
    });

}

application.prototype.save_hd = async function(type, data, fname, fdate, gender, dur, score, title) {
    var fn = Utils.escape_RegExp(fname);
    var fd = Utils.escape_RegExp(fdate);

    var p = {
        type: type,
        data: data,
        fname: fn,
        fdate: fd,
        gender: gender,
        dur: dur,
        score: score
    };
    return new Promise((resolve, reject) => {

        $.ajax({url:'cntr/gwdata.php', type:'POST',data:p, dataType:'json'}).
        done(function(data){
            resolve(data);
        }).
        fail(function(e) {
            console.log('save ajax error', e);
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

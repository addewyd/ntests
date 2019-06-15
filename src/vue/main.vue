<template>
<div>
    <div class="top-menu" v-if="showTop">
    <div class="top">
        ntests
    </div>
    <ul>
        <li class="tlist"><button @click="mnqw()">mnqw (ORT)</button></li>
        <li class="tlist"><button @click="gds()">gds</button></li>
        <li class="tlist"><button @click="hdrs()">HDRS</button></li>
        <li class="tlist">1</li>
        <li class="tlist">1</li>
        <li class="tlist">1</li>
        <li class="tlist">1</li>
    </ul>
    </div>

    <modal-window v-if="showMnqw" @close="showMnqw = false">
        <div slot="body">
           <q-tmpl-type-mnqw :oData="qData"></q-tmpl-type-mnqw>
        </div>
    </modal-window>
    <modal-window v-if="showGds" @close="showGds = false">
        <div slot="body">
           <q-tmpl-type-mnqw :oData="qData"></q-tmpl-type-mnqw>
        </div>
    </modal-window>
    <modal-window v-if="showHdrs" @close="showHdrs = false">
        <div slot="body">
           <q-tmpl-type-hdrs :oData="qData"></q-tmpl-type-hdrs>
        </div>
    </modal-window>


</div>
</template>

<script>

import {app, Vue} from '../app/app';
import * as Utils  from '../app/utils';
import * as Q  from '../app/qdata';
export default {
    data: function() {
       return {
        qData: {},
        showMnqw: false,
        showGds: false,
        showHdrs: false,
        showTop: true
       }
    },
    methods: {
        mnqw: function() {
            console.log('mnqw');
            this.qData = Q.qMnqw();
            this.showMnqw = true;
            this.showTop = false;
        },
        gds: function() {
            console.log('gds');
            this.qData = Q.qGds();
            this.showGds = true;
            this.showTop = false;
        },
        hdrs: function() {
            console.log('hdrs');
            this.qData = Q.qHdrs();
            this.showHdrs = true;
            this.showTop = false;
        }
    }
}
</script>

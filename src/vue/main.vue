<template>
<div>
    <div class="top-menu" v-if="shows.showTop">
    <div class="top">
        ntests
    </div>
    <ul class="tlist">
        <li class="tlist"><button class="btn btn-primary" @click="mnqw()">mnqw (ORT)</button></li>
        <li class="tlist"><button class="btn btn-primary" @click="gds()">gds</button></li>
        <li class="tlist"><button class="btn btn-primary" @click="hdrs()">HDRS</button></li>
        <li class="tlist"><button class="btn btn-primary" @click="phq9()">PHQ9</button></li>
        <li class="tlist"><button class="btn btn-primary" @click="sds()">SDS</button></li>
        <li class="tlist">1</li>
        <li class="tlist">1</li>
    </ul>
    </div>

    <modal-window v-if="shows.showMnqw" @close="shows.showMnqw = false">
        <div slot="body">
           <q-tmpl-type-mnqw :oData="qData" :shows="shows"></q-tmpl-type-mnqw>
        </div>
    </modal-window>
    <modal-window v-if="shows.showGds" @close="shows.showGds = false">
        <div slot="body">
           <q-tmpl-type-mnqw :oData="qData" :shows="shows"></q-tmpl-type-mnqw>
        </div>
    </modal-window>
    <modal-window v-if="shows.showHdrs" @close="shows.showHdrs = false">
        <div slot="body">
           <q-tmpl-type-hdrs :oData="qData" :shows="shows"></q-tmpl-type-hdrs>
        </div>
    </modal-window>
    <modal-window v-if="shows.showPhq9" @close="shows.showPhq9 = false">
        <div slot="body">
           <q-tmpl-type-hdrs :oData="qData" :shows="shows"></q-tmpl-type-hdrs>
        </div>
    </modal-window>
    <modal-window v-if="shows.showSds" @close="shows.showSds = false">
        <div slot="body">
           <q-tmpl-type-hdrs :oData="qData" :shows="shows"></q-tmpl-type-hdrs>
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
        shows: {
        showMnqw: false,
        showGds: false,
        showHdrs: false,
        showPhq9: false,
        showSds: false,
        showTop: true
        }
       }
    },
    methods: {
        mnqw: function() {
            console.log('mnqw');
            this.qData = Q.qMnqw();
            this.shows.showMnqw = true;
            this.shows.showTop = false;
        },
        gds: function() {
            console.log('gds');
            this.qData = Q.qGds();
            this.shows.showGds = true;
            this.shows.showTop = false;
        },
        hdrs: function() {
            console.log('hdrs');
            this.qData = Q.qHdrs();
            this.shows.showHdrs = true;
            this.shows.showTop = false;
        },
        phq9: function() {
            console.log('phq9');
            this.qData = Q.qPhq9();
            this.shows.showPhq9 = true;
            this.shows.showTop = false;
        },
        sds: function() {
            console.log('sds');
            this.qData = Q.qSds();
            this.shows.showSds = true;
            this.shows.showTop = false;
        }
    }
}
</script>

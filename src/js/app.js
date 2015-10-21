import Vue from 'Vue';
import Flexbox from './Flexbox';
import Boxlist from './Boxlist';

function ready() {
  this.vue = new Vue({
    el: '#app',
    data: {
      boxes: []
    },
    methods: {
      add() {
        this.boxes.push(new Flexbox());
      }
    },
    components: {
      'u-flexbox': Flexbox,
      'u-boxlist': Boxlist
    }
  });
}

document.addEventListener('DOMContentLoaded', ready);
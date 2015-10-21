import Vue from 'Vue';
import template from './flexbox-template';

export default class Flexbox extends Vue {
  constructor(opt = {}) {
    var option = {
      template: template,
      data: () => {
        return {
          boxes: [],
          name: Date.now(),
          w: 'auto',
          h: 'auto',
          direction: 'column',
          wrap: 'nowrap',
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
          self: 'auto',
          items: 'flex-start',
          'grow': 1,
          'shrink': 1,
          basis: 'auto'
        }
      },
      computed: {
        width(){
          return parseInt(this.w) == this.w ? this.w + 'px' : this.w;
        },
        height(){
          return parseInt(this.h) == this.h? this.h + 'px' : this.h;
        }
      },
      methods: {
        add(){
          this.boxes.push(new Flexbox());
        },
        remove(){
          this.$parent.boxes.$remove(this.$index);
        }
      }
    };
    console.log(opt);
    Vue.util.extend(opt, option);
    super(opt);
  }
}
import Vue from 'Vue';

var template = `
  <li>
    {{$index}}:{{boxes}}
    <ul>
      <u-boxlist v-repeat="boxes"></u-boxlist>
    </ul>
  </li>
`;

export default class Boxlist extends Vue{
  constructor(opt = {}){
    var option = {
      template: template,
      data: () => {
        return {
        }
      },
      methods: {
        remove(){
          
        },
        add(){
          var f = new Boxlist();
          this.boxes.push(f);
        }
      }
    };
    console.log(opt);
    Vue.util.extend(opt, option);
    super(opt);
  }
}
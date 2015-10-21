var template = `
  <div class="flexbox" v-style="height: height, width: width, order: order, flex-grow: grow, flex-shrink: shrink, flex-basis: basis, align-self: self">
    <div class="buttons">
      <p>{{$index}}</p>
      <button v-on="click: add">add child</button>
      <button v-on="click: remove">remove me</button>
      <div class="form">
        <ul class="left-form">
          <li>
            <label>
              Width: <input type="text" name="" v-model="w" id="" />
            </label>
          </li>
          <li>
            <label>
              Height: <input type="text" name="" v-model="h" id="" />
            </label>
          </li>
          <li>
            <label>
              direction: 
              <select v-model="direction">
                <option selected>row</option>
                <option>row-reverse</option>
                <option>column</option>
                <option>column-reverse</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              wrap:
              <select v-model="wrap">
                <option selected>nowrap</option>
                <option>wrap</option>
                <option>wrap-reverse</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              justify-content:
              <select v-model="justifyContent">
                <option selected>flex-start</option>
                <option>flex-end</option>
                <option>center</option>
                <option>space-between</option>
                <option>space-around</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              align-items:
              <select v-model="items">
                <option selected>flex-start</option>
                <option>flex-end</option>
                <option>center</option>
                <option>baseline</option>
                <option>stretch</option>
              </select>
            </label>
          </li>
        </ul>
        <ul class="right-form">
          <li>
            <label>
              order: <input type="text" name="" v-model="order" id="" />
            </label>
          </li>
          <li>
            <label>
              grow: <input type="text" name="" v-model="grow" id="" />
            </label>
          </li>
          <li>
            <label>
              shrink: <input type="text" name="" v-model="shrink" id="" />
            </label>
          </li>
          <li>
            <label>
              basis: <input type="text" name="" v-model="basis" id="" />
            </label>
          </li>
          <li>
            <label>
              align-content:
              <select v-model="alignContent">
                <option selected>flex-start</option>
                <option>flex-end</option>
                <option>center</option>
                <option>space-between</option>
                <option>space-around</option>
                <option>stretch</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              align-self:
              <select v-model="self">
                <option selected>auto</option>
                <option>flex-start</option>
                <option>flex-end</option>
                <option>center</option>
                <option>baseline</option>
                <option>stretch</option>
              </select>
            </label>
          </li>
        </ul>
      </div><!-- end of .form -->
    </div><!-- end of .buttons -->
    <div class="flexbox-inner" v-style="flex-direction: direction, flex-wrap: wrap, justify-content: justifyContent, align-items: items, align-content: alignContent">
      <u-flexbox v-repeat="boxes"></u-flexbox>
    </div>
  </div>
`;

export default template;
import EventHandler from "./event-handler";
export default class Switch {
  constructor(element, options) {
    this._element = element;
    this._config = options;
    this._checkbox = element.querySelector('input[type="checkbox"]')
    if (this._checkbox) {
      this._checkbox.addEventListener('change', function (event) {
        EventHandler.trigger(this._element, 'change.app.switch', {})
      })
    }

    this._switchLeft = element.querySelector('.switch-left');
    console.log(this._switchLeft)

    this._switchRight = element.querySelector('.switch-right');
    console.log(this._switchRight)

    if (this._switchLeft) {
      this._switchLeft.addEventListener('click', function (event) {
        EventHandler.trigger(this._element, 'change.app.switch', {})
        console.log('switch left click')
      })
    }

    if (this._switchRight) {
      this._switchRight.addEventListener('click', function (event) {
        EventHandler.trigger(this._element, 'change.app.switch', {})
        console.log('switch right click')
      })
    }

  }

  show() {
    EventHandler.trigger(this._element, 'change.app.switch', {})
  }


}
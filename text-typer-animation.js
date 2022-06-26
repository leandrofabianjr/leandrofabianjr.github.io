class TextTyperAnimation {
  timeToType = 200;
  timeToBlink = 500;
  timeToErase = 50;

  constructor($container, textToType) {
    this.$c = $container;
    this.ttt = textToType;
  }

  start() {
    this._typing();
  }

  _typing(i = 1) {
    if (i > this.ttt.length) {
      this.$c.textContent = this.ttt;
      this._blinking();
      return;
    }
    this.$c.textContent = this.ttt.slice(0, i++) + '_';
    setTimeout(() => this._typing(i), this.timeToType);
  }

  _blinking(time = 8) {
    if (!time) {
      this.$c.textContent.length ? this._erasing() : this._typing();
      return;
    }
    if (this.$c.textContent[this.$c.textContent.length - 1] == '_') {
      this.$c.textContent = this.$c.textContent.slice(0, -1);
    } else {
      this.$c.textContent += '_';
    }
    setTimeout(() => this._blinking(--time), this.timeToBlink);
  }

  _erasing(i = this.$c.textContent.length) {
    if (i < 0) {
      this.$c.textContent = '';
      this._blinking();
      return;
    }
    this.$c.textContent = this.ttt.slice(0, i) + '_';
    setTimeout(() => this._erasing(--i), this.timeToErase);
  }
}

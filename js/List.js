
class List extends Events {

  constructor ($container) {
    super();
    this.$container = $container;

    this.$container.click(e => {
      this.select($(e.target).closest('.list-item').index());
    });
  }

  select (index) {
    if (this.$selected) {
      this.$selected.removeClass('selected');
      this.$selected = null;
    }
    if (index >= 0 && this.data[index]) {
      this.$selected = $(this.$container.find('.list-item').get(index));
      this.$selected.addClass('selected');
      this.emit('select', this.data[index]);
    }
  }

  setData (data = []) {
    this.select(-1);
    this.data = data;
    this.$container.empty();
    this.data.forEach(item => {
      this.$container.append(this.render(item));
    });
    if (this.data.length === 1) {
      this.select(0);
    }
  }

  render (item) {
    return '';
  }

  show () {
    this.$container.show();
  }

  hide () {
    this.$container.hide();
  }
}

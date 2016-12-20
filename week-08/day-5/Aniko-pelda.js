function App () {
  this.valami = 'hello';
}

App.prototype.init = function () {
  document
    .querySelector('.addButton')
    .addEventListener('click', this.onAddClick.bind(this));
};

App.prototype.onAddClick = function () {
  this.sendRequest(console.log);
};

App.prototype.sendRequest = function (callback) {
  // .... varok .... valami jon a szerverrol
  callback('kiscica');
};

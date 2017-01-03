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


//////////////////////// uj pelda /////////////////////////////////////////

function alma(){
    console.log("most futottam le");
    return function(){
        console.log("most futott le a fuggveny amit visszaadtam");
    }
}

var almavisszateresiErteke = alma() // Ha csak az alamat akarom futtani az igy megy: var almavisszateresiErteke = alma, vagy igy alma()
almavisszateresiErteke() // Ezzel fut le az alma es a benne levo masodik function is

setTimeout(alma, 1000);

//////////////////////// uj pelda /////////////////////////////////////////

function alma(){
    console.log("most futottam le");
    return function(){
        console.log("most futott le a fuggveny amit visszaadtam");
    }
}

function beka(callback){
    console.log("most futott le a beka");
    callback()
}

beka(alma);
beka(alma());

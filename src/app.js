import Number from './components/number.js';
import Rsp from './components/rsp.js';
import Menu from './components/menu.js';

export default class App {
  constructor($target) {
    const menu = new Menu();
    menu.init({
      $target
    })
  }
  Number($target) {
    console.log("app().Number() 실행됨")
    const number = new Number({
      $target
    });
  }
  Rsp($target) {
    console.log("app().Rsp() 실행됨")
    const rsp = new Rsp({
      $target
    });
  }
}
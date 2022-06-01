import Number from './components/number.js';
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
}
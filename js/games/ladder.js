export class Ladder {
    constructor() {
        this.Title = 'Create HTML Element for Random Choice';
        this.groupOfItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
        this.makeItems = (groupOfItems) => {
            let htmlStr = '';
            for (let item of groupOfItems) {
                htmlStr += `<li class="item">${item}</li>`;
            }
            return htmlStr;
        };
    }
    show() {
        document.querySelector('body').insertAdjacentHTML(
            'beforeend',
            `<div class="container">
                <header>
                    <h1 class="heading__primary">${this.Title}</h1>
                </header>
                    <ul class="item--container">
                        ${this.makeItems(this.groupOfItems)}
                    </ul>
            </div>`
        );
    };
}
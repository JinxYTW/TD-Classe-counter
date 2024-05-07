import { Observer } from './../pattern/observer.js';
class View extends Observer{
    #controller;

    constructor(controller){
        super();
        this.#controller = controller;

        const incrementButton = document.querySelector('#btn-increment');

        incrementButton.addEventListener('click', () => {
            this.#controller.incrementCounter();
        });

        const decrementButton = document.querySelector('#btn-decrement');

        decrementButton.addEventListener('click', () => {
            this.#controller.decrementCounter();
        });
    }

    notify(){
        const counterValue = document.querySelector('#txt-counter');
        counterValue.textContent = this.#controller.CounterValue;
    }
}

export { View };
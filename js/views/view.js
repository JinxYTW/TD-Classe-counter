class View extends Observer{
    #controller;

    constructor(controller){
        super();
        this.#controller = controller;

        const incrementButton = document.querySelector('#btn-increment');

        incrementButton.addEventListener('click', () => {
            this.#controller.incrementCounter();
        });
    }

    notify(){
        const counterValue = document.querySelector('txt-counter');
        counterValue.textContent = this.#controller.CounterValue;
    }
}
import { Notifier } from './../pattern/notifier.js';
import { Counter } from './../models/counter.js';

class Controller extends Notifier{

    #counter;

    constructor(){
        super();
        this.#counter = new Counter();
        
    }

    incrementCounter(){
        this.#counter.incrementValue();
        this.notify();
    }

    decrementCounter(){
        this.#counter.decrementValue();
        this.notify();
    }

    get CounterValue(){
        return this.#counter.value;
    }
}

export { Controller };
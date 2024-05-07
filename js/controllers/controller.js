class Controller extends Notifier{

    #counter;

    constructor(){
        super();
        
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


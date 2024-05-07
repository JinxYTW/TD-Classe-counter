export function getCounter() {
    let counter = 0;
    return counter;
}

class Counter {
    #value = 0;

    constructor(){
        this.#value = 0;
    }

    getValue(){
        return this.#value;
    }   

    incrementValue(){  
        this.#value++;
    }

    decrementValue(){
        this.#value--;
    }


}

const counter = new Counter();
export { counter }; 

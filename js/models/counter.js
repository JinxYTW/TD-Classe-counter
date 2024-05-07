export function getCounter() {
    let counter = 0;
    return counter;
}

class Counter {
    #value = 0;

    constructor(){
        this.#value = 0;
    }

    get value(){
        return this.#value;
    }

    set value(value){
        this.#value = value;
    }

    incrementValue(){  
        this.#value++;
    }

    decrementValue(){
        this.#value--;
    }


}

export { Counter }; 

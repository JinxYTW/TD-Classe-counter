class Notifier{

    #observers = [];

    addObserver(observer){
        this.#observers.push(observer);
    }

    notify(){
        this.#observers.forEach(observer => observer.notify());//On parcourt le tableau d'observateurs et on appelle la méthode notify() de chaque observateur.
    }
}

export { Notifier };
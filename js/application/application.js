import { Counter} from "./../models/counter.js" 
import { Controller } from "./../controllers/controller.js"
import { View } from "./../views/view.js"


window.addEventListener('load', () => {

    const counter = new Counter();

    const controller = new Controller();
    const view = new View(controller);

    controller.addObserver(view);
    console.log('application.js loaded');
    
    //console.log(counter.value);  
    //counter.value = 10;
    //console.log(counter.value);
    
});






import { counter} from "./../models/counter.js" 
console.log('application.js loaded');
console.log(counter.value);  
counter.value = 10;
console.log(counter.value);

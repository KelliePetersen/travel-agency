const $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();
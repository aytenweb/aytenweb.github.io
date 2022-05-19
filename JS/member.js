let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);	
const member = document.querySelector('.member');
var who;
member.textContent=person1.name.first;
//member.textContent=person1.greeting+person1.bio;
//member.textContent=person1.farewell;

function Person(first, last, age, gender, interests) {
  this.name = {
    first : first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  if (this.gender==='male') {who="He";} else {who="She";}
  string+=who+' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.';
  this.bio=string;
  this.greeting = 'Hi! I\'m ' + this.name.first + '.';
  this.farewell=this.name.first + ' has left the building. Bye for now!';
//alert(this.bio);

}

 Person.prototype.bios = function() {
        // First define a string, and make it equal to the part of
        // the bio that we know will always be the same.
        let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        // define a variable that will contain the pronoun part of
        // the second sentence
        let pronoun;

        // check what the value of gender is, and set pronoun
        // to an appropriate value in each case
        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
          pronoun = 'He likes ';
        } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
          pronoun = 'She likes ';
        } else {
          pronoun = 'They like ';
        }

        // add the pronoun string on to the end of the main string
        string += pronoun;

        // use another conditional to structure the last part of the
        // second sentence depending on whether the number of interests
        // is 1, 2, or 3
        if(this.interests.length === 1) {
          string += this.interests[0] + '.';
        } else if(this.interests.length === 2) {
          string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
          // if there are more than 2 interests, we loop through them
          // all, adding each one to the main string followed by a comma,
          // except for the last one, which needs an and & a full stop
          for(let i = 0; i < this.interests.length; i++) {
            if(i === this.interests.length - 1) {
              string += 'and ' + this.interests[i] + '.';
            } else {
              string += this.interests[i] + ', ';
            }
          }
        }

        // finally, with the string built, we alert() it
        alert(string);
      };

Person.prototype.greetings = function() {
  alert('Hello. I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
    writable: true });


Teacher.prototype.greetings = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('Macho', 'Man', 35, 'male', ['music', 'skiing'],'Biology');	
//member.textContent=t1.tgreeting;
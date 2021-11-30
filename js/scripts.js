function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
};

/* console.log("Welcome to my portfolio, nice to see you here!");

var person = {
  name: "Annemarie",
  age: 39,
  hobbies: "photography"
};

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

for (var i = 1; i <= 100; i++) {
  console.log(i);
};
*/

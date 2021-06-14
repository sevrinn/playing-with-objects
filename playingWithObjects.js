/**
 * Playing with Objects
 * Imagine that you are given an array of objects.
 */
 var users = [{name: "Michael", age:37}, 
              {name: "John", age:30},       
              {name: "David", age:27}];
              
 //How would you log/print John's age?
 console.log(users[1].age);

 //How would you log/print name of first user?
 console.log(users[0].name);
 var userAges = function(arrOfUserObjects) {
    for(var i = 0; i < arrOfUserObjects.length; i++) {
        console.log(users[i].name +" - "+users[i].age);
    }
}
userAges(users);
 //How would you log/print out names and ages of all users in array?
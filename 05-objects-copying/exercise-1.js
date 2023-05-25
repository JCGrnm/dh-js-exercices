const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/*Why would object `person1` still be modified, by modifying object `person2`?
A variable assigned to an object does not store the object itself, but rather its reference 
or its "memory address"; we are copying its location reference. 
Any modifications made to person2's values, will also affect person1's values 
since they point to the same object allocated in memory.

A visual reference could be:
      HEAP - unordered storage for variables
memory address 
 010 | "John"  |
 011 |         |
 012 |         |
 013 |         |
----------------------------------------------------
      STACK - first-in-last-out variables/function arguments storage
memory address
person1 000 | 010 | ---➡ pointing to same HEAP address
person2 001 | 010 | ---⤴
        002 |     |
        003 |     |
*/


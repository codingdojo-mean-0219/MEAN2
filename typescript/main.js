var myStr = 'some string content';
// myStr = '234';
var array = ['dog', 'cat'];
array.push('string');
array.push(234);
// array.push({});
array.push(true);
var first = array[0];
function isString(value) {
    return typeof value === 'string';
}
if (isString(first)) {
    first.normalize();
}
var Person = /** @class */ (function () {
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    return Person;
}());
var person = new Person(45, 'Bob');

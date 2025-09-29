const person = [
    {
        "first-Name": "John",
        lastName: "Doe",
        age: 20,
        eyeColor: "blue",
        siblings: [{
            firstName: "Jane",
            age:18,
            eyeColor: "brown"
        },{
            firstName: "Jim",
            age : 16,
            eyeColor:"green"
        }]
    },
    {
        firstName: "Juan",
        lastName: "Lopez",
        age:21,
        eyeColor: "gold"
    }

];

console.log(person[0].lastName);
console.log(person[0]["first-Name"]);
console.log(person[0].siblings[0].eyeColor)
console.log(person[1].eyeColor)
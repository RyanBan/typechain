class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const ban = new Human("Ban", 21, "male");

//gender parameter is optional
const sayHi = (person: Human): string => {
    return(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`)
};
console.log(sayHi(ban));


export { };
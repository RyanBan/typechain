const name = "Ban",
age = 44,
gender="male";

//gender parameter is optional
const sayHi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
//expected 3 arguments, never happend in js
sayHi(name, age, gender);


export{};
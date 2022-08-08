// console.log('hello world');

// let age: number = 20;


// let sales: number = 123_45_425;
// let course: string = 'hey reydel';
// let isPublished: boolean = true;

// we can also remove the type because typescript 
// automatically defined it if you put a value next to the variable

// here:
// let salesP = 123_45_425;
// let courseP = 'hey reydel';
// let isPublishedP = true;



// any type

// if you dont define the type, typescript will read it as any
// which means that any type of types can be done 

// you did not define the value and its type 
// let phone;

// you can do 
// phone = 1;
// phone = "hehehe";
// phone = true;

// avoid any type as much as possible 

// do 
// const render1 = (document: any) => {
//     console.log(document)
// }

// dont 
// const render2 = (document) => {
//     console.log(document)
// }


// arrays 

// let numbers: number[] = [1,2,3,4];

// numbers.forEach(n => {
//     n.toString
//     console.log(n)
// })


// tupples 

// let number: [number, string] = [1, 'reydel'];

// tupples is useful if you only have 2 values, anything morethan
// that would make the code hard to understand and also not recommendable

// enum 

// const small = 1;
// const medium = 2;
// const large = 3;

// enum should be in PascalCase for better understanding 

// not optimized
// enum Size { Small = 1, Medium, Large};

// optimized
// const enum Size { Small = 1, Medium, Large};

// let mySize: Size = Size.Large;
// console.log(mySize);


// functions 

// ? = optional 

// function calculateTax(income: number, taxYear: number): number {
//     if (taxYear < 2022){
//         return income * 1.2;
//     }

//     return income * 1.3;
// }

// calculateTax(10000, 2022)

// console.log(calculateTax(10000, 2022))


// objects 

// let employee = { id: 1};

// not allowed since name does not exist in employee object
// although this code can still run in vanilla js
// employee.name = "reydel"


// readonly modifier will not allow to modify the id 
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Reydel',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }


// type alliases 

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: 'Reydel',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }



// union type 

// | = or 

// const kgToLbs = (weight: number | string): number => {
//     if(typeof weight === 'number'){
//         return weight * 2.2;

//     } else {
//         return parseInt(weight) * 2.2;
//     }
// }


// intersection type 

// & = and 

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox : UIWidget = {
//     resize: () => {},
//     drag: () => {}
// }


// literal type 

// Exact specifier, literal dont have to be a number, 
// it can also be a string or boolean 

// type Quantity = 10 | 20;

// let totalQuantity: Quantity = 20;

// type sizeExtension = 'cm' | 'inch';

// let sizes: sizeExtension = "cm";




// nullable types 

// const greet = (name: string | null | undefined) => {
//     if(name){
//         console.log(name.toUpperCase());
//     } else {
//         console.log('null')
//     }
// }

// greet(null);



// optional chaining 

type Customer = {
    birthday: Date,
}

let getCustomer = (id: number) : Customer | null | undefined => {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1);

console.log(customer?.birthday)
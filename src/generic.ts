// =========================================
// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];


// =========================================
// const promise = new Promise<number>(resolve => {
// const promise: Promise<number> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(50.25);
//   }, 1000);
// });
// promise.then(data => {
//   console.log(data.toFixed());
// });


// =========================================
// function mergeObjects<T extends object, R extends object>(a: T, b: R) {
//   return Object.assign({}, a, b);
// }
// const merged = mergeObjects({name: 'Vladilen'}, {age: 26});
// const merged2 = mergeObjects({model: 'Ford'}, {year: 2010});
// // const merged3 = mergeObjects('Hello', 'World'); // Error case
// console.log(merged);
// console.log(merged2);


// =========================================
// interface ILength {
//   length: number;
// }
// function withCount<T extends ILength>(value: T): {value: T, count: string} {
//   return {
//     value,
//     count: `This object length is ${value.length} characters`
//   }
// }
// console.log(withCount('Hi typescript'));
// console.log(withCount(['I', 'Am', 'Array']));
// // console.log(withCount(20));
// console.log(withCount({length: 20}));


// =========================================
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key];
// }
// const person = {
//   name: 'Vladilen',
//   age: 26
// };
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));


// =========================================
// class Collection<T extends number | string | boolean> {
//   // private _items: T[] = [];
//   constructor(private _items: T[] = []) {}
//   add(item: T) {
//     this._items.push(item);
//   }
//   remove(item: T) {
//     this._items = this._items.filter(i => i !== item);
//   }
//   get items(): T[] {
//     return this._items;
//   }
// }

// const strings = new Collection(['I', 'Am', 'Strings']);
// strings.add('!');
// strings.remove('Am');
// console.log(strings);
// console.log(strings.items);

// const numbers = new Collection([1, 2, 3]);
// numbers.add(4);
// numbers.remove(3);
// console.log(numbers);
// console.log(numbers.items);

// const objects = new Collection([{a: 1}, {b: 2}]);
// objects.remove({b: 2});
// console.log(objects.items);


// =========================================
// interface Car {
//   model: string;
//   year: number;
// }
// function createAndValidateCar(model: string, year: number): Car {
//   const car: Partial<Car> = {};
//   if (model.length > 3) {
//     car.model = model;
//   }
//   if (year > 2000) {
//     car.year = year;
//   }
//   return car as Car;
// }
// const car = createAndValidateCar('Ford', 1988);
// const car = createAndValidateCar('Ford', 2014);
// console.log(car);


// =========================================
// const cars: Array<string> = ['Ford', 'Audi'];
// cars.shift();
// console.log(cars);

// const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift(); // cars is only read, can't change
// console.log(cars[1]);

// const ford: Readonly<Car> = {
//   model: 'Ford',
//   year: 2020
// };
// ford.model = 'Ferrari'; ford properties are readonly
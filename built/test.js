// export class Test {
//     run() {
//         console.log(`Test started`);
//     }
// }
// export function SomeFunction() { }
// export const SomeConst = 1;
// export class Collection<T> {
//     protected items: T[] = [];
//     get Count(): number {
//         return this.items.length;
//     }
//     /**
//      * 
//      * 
//      * @param {T} item
//      */
//     Add(item: T) {
//         console.log("Added");
//         this.items.push(item);
//     }
//     /**
//      * 
//      * 
//      * @param {number} index Индек элемента коллекции
//      * @returns {T}
//      */
//     Items(index: number): T {
//         return this.items[index];
//     }
//     Clear() {
//         this.items = [];
//     }
//     static TYPE = "Hello";
// }
// export interface ITest {
//     test: string;
// }
// export class StringCollection extends Collection<string> {}
// export class NumberCollection extends Collection<string> {}
// export class BooleanCollection extends Collection<string> {}
// export class TestCollection extends Collection<ITest> {
//     Add(item: ITest) {
//         console.log("TestCollection");
//         super.Add(item);
//     }
// } 

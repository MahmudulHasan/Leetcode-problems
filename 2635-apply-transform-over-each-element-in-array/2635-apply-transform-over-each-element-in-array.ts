function map(arr: number[], fn: (n: number, i: number) => number): number[] {
   let newArray = [];
   for(let i = 0; i < arr.length; i++) {
       newArray[i] = fn(arr[i], i);
   }
   return newArray;
};
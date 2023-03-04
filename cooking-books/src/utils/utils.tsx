import { Book } from "../pages/products";

export function mixin(array1: Book[], array2: Book[]) {
    let count : Book[] = [];
    array1.map(i => count.push(i));
    array2.map(i => count.push(i));
    return count
  }
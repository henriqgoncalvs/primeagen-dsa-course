export default class ArrayList<T> {
    public length: number;

    constructor() {}

    // O(1)
    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    // O(1)
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    // O(1)
    removeAt(idx: number): T | undefined {}
}
